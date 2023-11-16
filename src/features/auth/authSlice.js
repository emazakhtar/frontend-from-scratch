import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser } from "./authAPI";

const initialState = {
  userLoggedIn: null,
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "auth/createUser",
  async (data) => {
    const response = await createUser(data);
    return response.data;
  }
);
export const checkUserAsync = createAsyncThunk(
  "auth/checkUser",
  async (formData) => {
    const response = await checkUser(formData);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userLoggedIn = action.payload.id;
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userLoggedIn = action.payload.id;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default authSlice.reducer;
export const selectLoggedInUser = (state) => state.auth.userLoggedIn;
