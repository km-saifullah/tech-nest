import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: 'SubCategory',
      required: true,
    },
    thumbnail: {
      thumnailImage: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
      },
    },
    gallery: [
      {
        galleryImage: {
          type: String,
          required: true,
        },
        publicId: {
          type: String,
        },
      },
    ],
    description: {
      type: String,
    },
    inventory: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Inventory',
      },
    ],
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product
