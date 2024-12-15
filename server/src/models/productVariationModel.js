import mongoose, { Schema } from 'mongoose'

const productVariationSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    variations: [
      {
        attribute: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
)

const ProductVariation = mongoose.model(
  'ProductVariation',
  productVariationSchema
)

export default ProductVariation
