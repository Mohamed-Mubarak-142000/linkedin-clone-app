import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initializeAuthentication,signOut, signInWithGoogle } from "./authActh";
import { User, UserState } from "../Common/types";

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //check found user or not---
    setCurrentUser(state, action) {
      state.user = action.payload;
      state.isLoading=false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInWithGoogle.pending, (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload ;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.user = null;
      state.error = action.error.message || "Sign In Failed";
      state.isLoading = false;
    });
    builder.addCase(initializeAuthentication.pending, (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(initializeAuthentication.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(initializeAuthentication.rejected, (state, action) => {
      state.user =null;
      state.error = action.error.message || "Sign In Failed";
      state.isLoading = false;
    });
    builder.addCase(signOut.pending, (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoading = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.user = null;
      state.error = action.error.message || "Sign In Failed";
      state.isLoading = false;
    });
  },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
