import { createSlice } from '@reduxjs/toolkit';

interface InitialHotelsStateProps {
  city: string;
}
const initialHotelsState: InitialHotelsStateProps = {
  city: '',
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState: initialHotelsState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = hotelSlice.actions;
export default hotelSlice.reducer;
