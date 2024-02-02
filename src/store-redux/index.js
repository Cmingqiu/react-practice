import { configureStore } from '@reduxjs/toolkit';
import countSlice from './features/countSlice';

const reduxStore = configureStore({
  reducer: {
    countSlice
  }
});

export default reduxStore;
