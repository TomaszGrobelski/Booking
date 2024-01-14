import express from 'express';

import Hotel from '../models/Hotel.js';

const router = express.Router();

router.get('/Hotel', async (req, res) => {
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

export default router;
