import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'countSlice',
  initialState: {
    value: 100
  },
  reducers: {
    increase(state, { payload: { value } }) {
      state.value += value;
    },
    decrease(state, { payload }) {
      state.value -= payload.value;
    }
  }
});

export const { increase, decrease } = countSlice.actions;
export default countSlice.reducer;
