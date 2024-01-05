import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      minlenght: 4,
      maxlength: 15,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      maxlength: 40,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  },
);

export default userSchema;
