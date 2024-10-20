import apiResponse from 'quick-response'
import Product from '../models/productModel.js'
import { cloudinaryUpload } from '../services/cloudinary.js'

// @desc:  add product
// @route: POST /api/v1/products/add-product
const addProduct = async (req, res) => {
  try {
    const { title, slug, category, subCategory } = req.body
    const { thumbnail, gallery } = req.files
    let thumbnailImgPath = thumbnail[0].path

    let newSlug
    if (!slug) {
      newSlug = title.replaceAll(' ', '-').toLowerCase() + '-' + Date.now()
    } else {
      const isSlugUnique = await Product.find({ slug })
      if (isSlugUnique) {
        return res.status(400).json(apiResponse(400, 'slug must be unique'))
      }
      newSlug = slug.replaceAll(' ', '-').toLowerCase() + '-' + Date.now()
    }

    const productThumbnailImg = await cloudinaryUpload(
      thumbnailImgPath,
      newSlug,
      'product'
    )

    const product = new Product()

    if (req.files?.gallery) {
      const { gallery } = req.files
      const galleryImages = await Promise.all(gallery)
      const galleryImagePath = galleryImages.map((path) => path.path)

      for (let imagePath of galleryImagePath) {
        newSlug = imagePath.replace('public/temp/', '').replace('.png', '')
        const uploadedGalleryImage = await cloudinaryUpload(
          imagePath,
          newSlug,
          'product/gallery'
        )

        product.gallery.push({
          galleryImage: uploadedGalleryImage.optimizeUrl,
          publicId: newSlug,
        })
      }
    }

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

export { addProduct }
