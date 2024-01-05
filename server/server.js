// import bodyParser from 'body-parser';
// import flash from 'connect-flash';
// import cookieParser from 'cookie-parser';
// import path from 'path'
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello, Express.js with MongoDB!' + mongoPassword);
// });

mongoose.connect(process.env.VITE_DB_URL);

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connected.');
});

const Schema = mongoose.Schema;
const hotelSchema = new Schema({
  name: String,
  age: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema, 'Hotel');

app.get('/Hotel', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (!hotels || hotels.length === 0) {
      res.status(400).send('No hotel found');
    } else {
      res.json(hotels);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving blog posts' });
  }
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(flash());

app.listen(3000, () => {
  console.log('Servere is listening...');
});
