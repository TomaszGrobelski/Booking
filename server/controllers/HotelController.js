import Hotel from '../models/Hotel.js';

class HotelController {
  static async getHotels(req, res) {
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
  }
}

export default HotelController;
