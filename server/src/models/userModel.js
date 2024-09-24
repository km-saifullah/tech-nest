import { mongoose, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    fullName: {
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
      type: Boolean,
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

// hash password
userSchema.pre('save', async function (next) {
  // only run thus function if password was actually modified
  if (!this.isModified('password')) return next()

  // hash password with cost of 10
  this.password = await bcrypt.hash(this.password, 10)

  next()
})

const User = mongoose.model('User', userSchema)

export default User
