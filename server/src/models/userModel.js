import { mongoose, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {
  accessTokenExpires,
  accessTokenSecret,
  refreshTokenExpires,
  refreshTokenSecret,
} from '../config/index.js'

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
      type: Date,
    },
    role: {
      type: String,
      enum: ['user', 'seller', 'admin', 'editor'],
      lowercase: true,
      default: 'user',
    },
    passwordResetToken: {
      type: String,
    },
    refreshToken: {
      type: String,
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

// generate accessToken and refreshToken
userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    accessTokenSecret,
    { expiresIn: accessTokenExpires }
  )
}

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    refreshTokenSecret,
    { expiresIn: refreshTokenExpires }
  )
}

// jwt token verification
userSchema.methods.verifyAccessToken = async function (token) {
  return jwt.verify(token, accessTokenSecret, function (err, decoded) {
    if (err) {
      return null
    }
    return decoded
  })
}

const User = mongoose.model('User', userSchema)

export default User
