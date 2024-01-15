import express from 'express';

import HotelController from '../controllers/HotelController.js';

const router = express.Router();

router.get('/Hotel', HotelController.getHotels);

export default router;
