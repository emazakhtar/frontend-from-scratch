import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice.js";
import authReducer from "../features/auth/authSlice.js";
import cartReducer from "../features/cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
