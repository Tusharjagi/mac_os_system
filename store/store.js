import { configureStore } from "@reduxjs/toolkit";
import DemoReducer from "./slices/slices";

export const store = configureStore({
  reducer: DemoReducer,
});
