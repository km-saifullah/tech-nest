import apiResponse from 'quick-response'
import Product from '../models/productModel.js'
import { cloudinaryUpload } from '../services/cloudinary.js'
import Inventory from '../models/inventoryModel.js'

// @desc:  add product
// @route: POST /api/v1/products/add-product
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
    const products = await Product.find({})
      .populate('category')
      .populate('subCategory')
      .populate('inventory')
    return res.status(200).json(
      apiResponse(200, 'all products data fetched', {
        products,
        results: products.length,
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
      .populate('inventory')

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
// @route: DELETE /api/v1/
const deleteProduct = async (req, res) => {
  try {
    // const { id } = req.params
    // const product = await Product.findById({ _id: id })
    // // console.log(product.inventory, 'typeof:', typeof product.inventory)
    // const gudam = product.inventory
    // console.log(gudam)

    // const foundId = gudam.find((inId) => inId.toString() === id.product)
    // console.log(foundId)

    // // if product does not found
    // if (!product) {
    //   return res.status(404).json(apiResponse(404, 'product does not found'))
    // }

    // delete this product from inventory
    // await Inventory.findByIdAndUpdate(
    //   { product: id },
    //   { $pull: { product: { _id: product._id } } }
    // )
    // const deleteInventoryProduct = await Inventory.findByIdAndDelete({
    //   _id: product.inventory[0].toString(),
    // })
    // console.log('first')
    // const deleteInventoryProduct = await Inventory.findById({
    //   _id: product.inventory[0].toString(),
    // })

    const { id } = req.params

    // Find the product by ID and ensure it exists
    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json(apiResponse(404, 'Product not found'))
    }

    // Find and delete the inventory associated with this product
    const inventoryEntry = await Inventory.findOneAndDelete({ product: id })

    // Delete the product
    await Product.deleteOne({ _id: id })

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
