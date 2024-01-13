import mongoose from 'mongoose';

const bookedHotelSchema = new mongoose.Schema({
  name: String,
  roomStandard: Number,
  roomDelux: Number,
  totalPrice: Number,
  imgUrl: String,
});

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 15,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 40,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    bookedHotels: [bookedHotelSchema],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('user', userSchema, 'register');

export default User;