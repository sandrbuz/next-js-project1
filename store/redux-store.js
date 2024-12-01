'use client';

import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { dialogsSlice } from './dialogsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    dialogs: dialogsSlice.reducer,
  },
  //devTools: process.env.NODE_ENV !== 'production', // DevTools включены в режиме разработки
});

export default store;
