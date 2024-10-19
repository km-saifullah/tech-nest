import mongoose, { Schema } from 'mongoose'

const reviewSchema = new Schema(
  {
    rating: {
      type: Number,
      max: 5,
    },
    comment: {
      type: String,
    },
    reviewImage: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
)

const Review = mongoose.model('Review', reviewSchema)

export default Review
