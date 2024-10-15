import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    subCategory: {
      type: mongoose.Types.ObjectId,
      ref: 'SubCategory',
    },
  },
  {
    timestamps: true,
  }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
