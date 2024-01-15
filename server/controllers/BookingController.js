import User from '../models/User.js';

class BookingController {
  static async getBookedHotels(req, res) {
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ bookedHotels: user.bookedHotels });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateBookedHotels(req, res) {
    const { bookedHotel } = req.body;
    try {
      const user = await User.findById(req.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isAlreadyBooked = user.bookedHotels.some((hotel) => hotel.name === bookedHotel.name);

      if (isAlreadyBooked) {
        return res.status(409).json({ message: 'That hotel is already booked.' });
      }

      user.bookedHotels.push(bookedHotel);
      await user.save();
      res.json({ message: 'Booking updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default BookingController;
