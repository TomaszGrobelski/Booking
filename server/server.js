import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

import bookingRoutes from './routes/bookingRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(cookieParser());

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('Połączono z MongoDB Atlas'))
  .catch((err) => console.error('Błąd połączenia', err));

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', async () => {
  console.log('MongoDB connected.');
});

app.use('/', hotelRoutes);
app.use('/', userRoutes);
app.use('/', bookingRoutes);

app.listen(3000, () => {
  console.log('Servere is listening...');
});
