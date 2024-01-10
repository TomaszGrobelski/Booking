import { configureStore } from '@reduxjs/toolkit';

import hotelsReducer from '../features/hotels/hotelsSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
