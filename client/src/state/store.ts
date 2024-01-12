import { configureStore } from '@reduxjs/toolkit';

import bookingSlice from '../features/booking/bookingSlice';
import hotelDataSlice from '../features/hotelDescription/hotelDataSlice';
import hotelsReducer from '../features/hotels/hotelsSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    user: userSlice,
    booking: bookingSlice,
    hotelDetails: hotelDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
