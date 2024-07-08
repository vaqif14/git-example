import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter-slicer",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    addObject: (
      state,
      action: PayloadAction<{ key: string; value: number }>,
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addObject } =
  counterSlice.actions;

export default counterSlice.reducer;
