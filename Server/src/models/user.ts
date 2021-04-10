import mongoose from 'mongoose';
import PasswordUtil from '../utils/Password';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    address: {},
    authToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await PasswordUtil.hashPassword(this.password);

    this.password = hashedPassword;
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
