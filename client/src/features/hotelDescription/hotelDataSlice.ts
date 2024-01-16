import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import HotelProps from '../../types/hotelProps';

const initialState: HotelProps = {
  _id: '',
  name: '',
  rating: 0,
  address: {
    street: '',
    city: '',
  },
  contact: 0,
  roomType: {
    delux: 0,
    standard: 0,
  },
  opinion: [],
  lat: 0,
  lng: 0,
  pages: [],
  amenities: [],
  description: '',
};

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotelData: (state, action: PayloadAction<HotelProps>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setHotelData } = hotelSlice.actions;
export default hotelSlice.reducer;
