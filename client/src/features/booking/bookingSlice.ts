import { createSlice } from '@reduxjs/toolkit';

interface initialBookingStateProps {
  adults: number;
  childrens: number;
  roomStandard: number;
  roomDelux: number;
  startDate: [] | null;
  endDate: [] | null;
  totalPrice: number;
}
const initialBookingState: initialBookingStateProps = {
  adults: 2,
  childrens: 0,
  roomStandard: 0,
  roomDelux: 0,
  startDate: null,
  endDate: null,
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialBookingState,
  reducers: {
    setPersons: (state, action) => {
      state.adults = action.payload.adults;
      state.childrens = action.payload.childrens;
      state.roomStandard = action.payload.roomStandard;
      state.roomDelux = action.payload.roomDelux;
    },
    setDate: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setPersons, setDate, setTotalPrice } = bookingSlice.actions;
export default bookingSlice.reducer;
