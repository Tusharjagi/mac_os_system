import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const demoSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testReducers: (state) => {
      state;
    },
  },
});

export default demoSlice.reducer;
export const { testReducers } = demoSlice.actions;
