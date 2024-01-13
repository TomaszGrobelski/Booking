import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { setBookedHotels } from '../features/user/userSlice';

const fetchBookedHotels = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/update-bookings', {
      withCredentials: true,
    });
    dispatch(setBookedHotels(response.data.bookedHotels));
  } catch (error) {
    console.error(error);
  }
};

export default fetchBookedHotels;
