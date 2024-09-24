import { mongoose, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Password minimum length is 8'],
    },
    emailVerified: {
      type: Date,
      default: false,
    },
    role: {
      type: String,
      enum: ['user', 'seller', 'admin', 'editor'],
      lowercase: true,
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
