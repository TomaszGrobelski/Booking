// import bodyParser from 'body-parser';
// import flash from 'connect-flash';
// import path from 'path'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Hotel from './models/Hotel.js';
import User from './models/User.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(cookieParser());

mongoose.connect(process.env.DB_LOCAL);

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
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.code === 11000) {
        let errorField = Object.keys(err.keyValue)[0];
        res.status(409).json({ message: `The ${errorField} is already in use.` });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Email or password is incorrect.' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.cookie('token', token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
        expires: new Date(Date.now() + 3600000),
      });
      res.json({ message: 'Sukces', user: user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Błąd serwera.' });
    });
});

app.get('/check-auth',(req,res)=>{
  try {
    const token= req.cookies.token;
    if(!token){
      return res.status(401).send({isLoggedIn:false})
    }
  

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).send({ isLoggedIn: false });
      }

      // Sprawdzenie, czy użytkownik z identyfikatorem z tokenu istnieje
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).send({ isLoggedIn: false });
      }

      // Użytkownik jest zalogowany
      return res.send({ isLoggedIn: true, user: user });
    });
  } catch (error) {
    return res.status(500).send({ error: 'Internal server error' });
  }
})

app.post('/logout', (req, res) => {
  res.clearCookie('token'); // Usuwa ciasteczko z tokenem
  res.send({ message: 'Logged out successfully' });
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(flash());

app.listen(3000, () => {
  console.log('Servere is listening...');
});
