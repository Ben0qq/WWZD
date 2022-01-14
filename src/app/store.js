import { configureStore } from '@reduxjs/toolkit';
import highchartsReducer from '../highcharts/highchartsSlice';

export const store = configureStore({
  reducer: {
    highcharts: highchartsReducer
  },
});