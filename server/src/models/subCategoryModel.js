import mongoose, { Schema } from 'mongoose'

const subCategorySchema = new Schema(
  {
    subCategoryName: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
)

const SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory
