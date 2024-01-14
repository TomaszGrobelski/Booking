import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BookedHotels {
  name: string;
  roomStandard: number;
  roomDelux: number;
  totalPrice: number;
  imgUrl: string;
}

interface FavoriteHotels {
  name: string;
  imgUrl: string;
}

interface UserInitialStateProps {
  name: string;
  email: string;
  isAuthenticated: boolean;
  bookedHotels: BookedHotels[];
  favoriteHotels: FavoriteHotels[];
}

const userInitialState: UserInitialStateProps = {
  name: '',
  email: '',
  isAuthenticated: false,
  bookedHotels: [],
  favoriteHotels: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setBookedHotels: (state, action: PayloadAction<BookedHotels[]>) => {
      state.bookedHotels = action.payload;
    },
    setFavoriteHotels: (state, action: PayloadAction<FavoriteHotels[]>) => {
      state.favoriteHotels = action.payload;
    },
  },
});

export const { setData, setAuthentication, setBookedHotels, setFavoriteHotels } = userSlice.actions;
export default userSlice.reducer;
