import apiResponse from 'quick-response'
import Product from '../models/productModel.js'
import { cloudinaryUpload } from '../services/cloudinary.js'
import Inventory from '../models/inventoryModel.js'
import Category from '../models/categoryModel.js'
import SubCategory from '../models/subCategoryModel.js'

// @desc:  add product
// @route: POST /api/v1/products
const addProduct = async (req, res) => {
  try {
    const { title, slug, category, subCategory } = req.body
    const { thumbnail, gallery } = req.files
    let thumbnailImgPath = thumbnail[0].path

    // generate new slug
    let newSlug
    if (!slug) {
      newSlug = title.replaceAll(' ', '-').toLowerCase() + '-' + Date.now()
    } else {
      const isSlugUnique = await Product.findOne({ slug })
      if (isSlugUnique) {
        return res.status(400).json(apiResponse(400, 'slug must be unique'))
      }
      newSlug = slug.replaceAll(' ', '-').toLowerCase() + '-' + Date.now()
    }

    // upload thumbnail image
    const productThumbnailImg = await cloudinaryUpload(
      thumbnailImgPath,
      newSlug,
      'product'
    )

    const product = new Product()

    // upload gallery images
    if (req.files?.gallery) {
      let gallerPublicId = ''
      const { gallery } = req.files

      const galleryImages = gallery.map((path) => path.path)

      for (let imagePath of galleryImages) {
        gallerPublicId = imagePath
          .replace('public/temp/', '')
          .replace(/\.(png|jpg|jpeg|gif|bmp|tiff|webp)$/i, '')

        const uploadedGalleryImage = await cloudinaryUpload(
          imagePath,
          gallerPublicId,
          'product/gallery'
        )

        product.gallery.push({
          galleryImage: uploadedGalleryImage.optimizeUrl,
          publicId: gallerPublicId,
        })
      }
    }

    // save product to db
    product.title = title
    product.category = category
    product.subCategory = subCategory
    product.slug = newSlug
    product.thumbnail.thumnailImage = productThumbnailImg.optimizeUrl
    product.thumbnail.publicId = productThumbnailImg.uploadResult.public_id
    await product.save()

    return res
      .status(201)
      .json(apiResponse(201, 'product created', { data: product }))
  } catch (error) {
    return res
      .status(500)
      .json(apiResponse(500, 'internal server error', { error: error.message }))
  }
}

// @desc:  get all products
// @route: GET /api/v1/products
const getAllProducts = async (req, res) => {
  try {
    // pagination
    const { page, limit, category, subCategory, sort, quantity } = req.query
    const shouldPaginate = Number(page) && Number(limit)
    const currentPage = shouldPaginate ? Math.max(Number(page), 1) : 1
    const baseLimit = shouldPaginate ? Number(limit) : 0
    const skip = shouldPaginate ? (currentPage - 1) * baseLimit : 0

    const filter = {}

    // filter by categoryName
    if (category) {
      const categoryNames = category.split(',')
      const foundCategories = await Category.find({
        categoryName: { $in: categoryNames.map((cat) => new RegExp(cat, 'i')) },
      })

      if (foundCategories.length > 0) {
        const categoryIds = foundCategories.map((cat) => cat._id)
        filter.category = { $in: categoryIds }
      } else {
        return res
          .status(200)
          .json(
            apiResponse(200, 'no products found for the specified categories')
          )
      }
    }

    // filter by subCategory name
    let subCategoryId
    if (subCategory) {
      const foundSubCategory = await SubCategory.findOne({
        subCategoryName: { $regex: subCategory, $options: 'i' },
      })
      if (foundSubCategory) {
        subCategoryId = foundSubCategory._id
      } else {
        return res
          .status(200)
          .json(
            apiResponse(200, 'no products found for the specified subCategory')
          )
      }
    }
    if (subCategoryId) {
      filter.subCategory = subCategoryId
    }

    const totalProducts = await Product.countDocuments(filter)
    const totalPages = shouldPaginate ? Math.ceil(totalProducts / baseLimit) : 1

    let products = await Product.find(filter)
      .populate({ path: 'category', select: 'categoryName' })
      .populate('subCategory')
      .populate({
        path: 'inventory',
        select: 'sellingPrice quantity',
        populate: {
          path: 'productVariation',
          select: '-_id -__v -createdAt -updatedAt',
        },
      })
      .skip(skip)
      .limit(baseLimit)

    // filter by quantity
    if (quantity) {
      const minQuantity = Number(quantity)
      products = products.filter((product) =>
        product.inventory.some((inv) => inv.quantity >= minQuantity)
      )
    }

    // sorting by price and quantity
    if (sort === 'priceLowToHigh') {
      products = products.sort(
        (a, b) => a.inventory[0]?.sellingPrice - b.inventory[0]?.sellingPrice
      )
    } else if (sort === 'priceHighToLow') {
      products = products.sort(
        (a, b) => b.inventory[0]?.sellingPrice - a.inventory[0]?.sellingPrice
      )
    } else if (sort === 'quantityLowToHigh') {
      products = products.sort(
        (a, b) => a.inventory[0]?.quantity - b.inventory[0]?.quantity
      )
    } else if (sort === 'quantityHighToLow') {
      products = products.sort(
        (a, b) => b.inventory[0]?.quantity - a.inventory[0]?.quantity
      )
    }

    return res.status(200).json(
      apiResponse(200, 'all products data fetched', {
        products,
        skip,
        baseLimit,
        totalProducts,
        totalPages,
        total: products.length,
      })
    )
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  get a product by id
// @route: GET /api/v1/products/:id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findOne({ _id: id })
      .populate('category')
      .populate('subCategory')
      .populate({
        path: 'inventory',
        select: 'sellingPrice quantity',
        populate: {
          path: 'productVariation',
          select: '-_id -__v -createdAt -updatedAt',
        },
      })

    // if product does not found
    if (!product) {
      return res
        .status(404)
        .json(apiResponse(404, 'product not found with this id'))
    }

    return res.status(200).json(
      apiResponse(200, 'product fetched successfully', {
        product,
      })
    )
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  update product
// @route: POST /api/v1/products/:id
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { title, slug, category, subCategory } = req.body
    const { thumbnail, gallery } = req.files
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

// @desc:  delete a product by id
// @route: DELETE /api/v1/products/:id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    // find the product by ID and ensure it exists
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json(apiResponse(404, 'Product not found'))
    }

    // delete the inventory associated with this product
    await Inventory.deleteMany({ product: id })

    // delete the product
    await Product.findByIdAndDelete({ _id: id })

    return res
      .status(200)
      .json(apiResponse(200, 'product deleted successfully'))
  } catch (error) {
    return res
      .status(400)
      .json(apiResponse(400, 'server error', { error: error.message }))
  }
}

export {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
