import { createSlice } from '@reduxjs/toolkit';

interface initialHotelsStateProps {
  city: string;
}
const initialHotelsState: initialHotelsStateProps = {
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
