import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookedHotels{
  name: string;
  roomStandard: number;
  roomDelux: number;
  totalPrice: number;
  imgUrl: string;

}
interface UserInitialStateProps {
  name: string;
  email: string;
  isAuthenticated: boolean;
  bookedHotels: BookedHotels[];
}

const userInitialState: UserInitialStateProps = {
  name: '',
  email: '',
  isAuthenticated: false,
  bookedHotels: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setAuthentication:(state,action: PayloadAction<boolean>)=>{
      state.isAuthenticated = action.payload
    },
    setBookedHotels:(state,action: PayloadAction<BookedHotels[]>)=>{
      state.bookedHotels = action.payload;
    }
  },
});

export const { setData, setAuthentication, setBookedHotels } = userSlice.actions;
export default userSlice.reducer;
