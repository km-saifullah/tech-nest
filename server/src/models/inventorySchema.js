import mongoose, { Schema } from 'mongoose'

const inventorySchema = new Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
    productVariation: {
      type: mongoose.Types.ObjectId,
      ref: 'ProductVariation',
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    sellingPrice: {
      type: String,
      required: true,
    },
    discountPrice: {
      price: {
        type: Number,
      },
      discountType: {
        type: string,
        enum: ['ammount', 'percentage'],
      },
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
)

const Inventory = mongoose.model('Inventory', inventorySchema)

export default Inventory
