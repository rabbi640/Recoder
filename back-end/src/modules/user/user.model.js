const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      immutable: true,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    profileImageUrl: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
