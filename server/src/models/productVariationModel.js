import mongoose, { Schema } from 'mongoose'

const productVariationSchema = new Schema(
  {
    variationName: {
      type: String,
    },
  },
  { timestamps: true }
)

const ProductVariation = mongoose.model(
  'ProductVariation',
  productVariationSchema
)

export default ProductVariation
