// import bodyParser from 'body-parser';
// import flash from 'connect-flash';
// import cookieParser from 'cookie-parser';
// import path from 'path'
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import Hotel from './models/Hotel.js';
import User from './models/User.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Hotele');

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err); // Usunąć do produkcji
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connected.'); // Usunąć do produkcji
});

app.get('/Hotel', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    if (!hotels || hotels.length === 0) {
      res.status(400).json({ message: 'No hotel found' });
    } else {
      res.json(hotels);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving blog posts' });
  }
});

app.post('/register', (req, res) => {
  User.create(req.body).then((user) => res.json(user))
  .catch(err => {
    if (err.code === 11000) {
      let errorField = Object.keys(err.keyValue)[0];
      res.status(409).json({ message: `The ${errorField} is already in use.` });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(flash());

app.listen(3000, () => {
  console.log('Servere is listening...');
});
