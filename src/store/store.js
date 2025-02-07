import { configureStore } from "@reduxjs/toolkit";
import DemoReducer from "../store/slices/slices";

export const store = configureStore({
  reducer: DemoReducer,
});
