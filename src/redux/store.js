import { configureStore } from "@reduxjs/toolkit";

// Slice
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
  },
});
