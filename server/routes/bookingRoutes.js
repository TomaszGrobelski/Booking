import express from 'express';

import BookingController from '../controllers/BookingController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router();

router.get('/update-bookings', authenticateToken, BookingController.getBookedHotels);
router.post('/update-bookings', authenticateToken, BookingController.updateBookedHotels);

export default router;
