import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { dialogsSlice } from './dialogsSlice';



// Создаём store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    dialogs: dialogsSlice.reducer,
  },
});

export default store;
