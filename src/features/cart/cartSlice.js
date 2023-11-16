import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchCartByUser } from "./cartAPI";

const initialState = {
  cartItems: [],
  status: "idle",
};

export const fetchCartByUserAsync = createAsyncThunk(
  "cart/fetchCartByUser",
  async (userId) => {
    const response = await fetchCartByUser(userId);
    return response.data;
  }
);
export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (product) => {
    const response = await addToCart(product);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCartByUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartByUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems = action.payload;
      })
      .addCase(fetchCartByUserAsync.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cartItems += action.payload;
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default cartSlice.reducer;
export const selectCart = (state) => state.cart.cartItems;
