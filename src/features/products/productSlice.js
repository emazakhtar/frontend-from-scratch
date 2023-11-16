import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProducts } from "./productAPI.js";

const initialState = {
  products: [],
  status: "idle",
  selectedProduct: null,
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async ({ pagination, filter }) => {
    const response = await fetchAllProducts(pagination, filter);
    return response.data;
  }
);
export const fetchProductAsync = createAsyncThunk(
  "product/fetchProducts",
  async (id) => {
    const response = await fetchProducts(id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
export const selectProduct = (state) => state.products.products;
export const selectSelectedProduct = (state) => state.products.selectedProduct;
