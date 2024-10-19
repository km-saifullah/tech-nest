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
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: 'SubCategory',
    },
    thumbnail: {
      type: String,
    },
    gallery: [
      {
        type: String,
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
