import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },

    incrementByFive: (state) => {
      state.value += 5;
    },

    decrementByFive: (state) => {
      state.value -= 5;
    },

    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByFive,
  decrementByFive,
  incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;