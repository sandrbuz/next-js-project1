import { createSlice } from '@reduxjs/toolkit';



// Пример slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
    },
  });
  
  // Экспортируем экшены
  export const { increment, decrement } = counterSlice.actions;