import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  address: Object,
  contact: Number,
  roomType: Object,
  opinion: Array,
  lat: Number,
  lng: Number,
  pages: Array,
});

const Hotel = mongoose.model('Hotel', hotelSchema);



export default Hotel;
