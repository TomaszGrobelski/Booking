import { createSlice } from '@reduxjs/toolkit';

interface UserInitialStateProps {
  name: string;
  email: string;
}

const userInitialState: UserInitialStateProps = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
