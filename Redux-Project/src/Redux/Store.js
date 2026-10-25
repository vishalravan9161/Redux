import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/SearchSlice";
export const store = configureStore({
  reducer: {
    search: searchSlice
  },
});
