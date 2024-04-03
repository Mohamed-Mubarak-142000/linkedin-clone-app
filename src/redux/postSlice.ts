import { createSlice } from "@reduxjs/toolkit";
import { PostState } from "../Common/types";
import { createPost, renderPosts } from "./postActh";

const initialState: PostState = {
  post: null,
  isLoading: false,
  error: "",
};
const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPost.pending, (state) => {
      state.post = [];
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(createPost.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(createPost.rejected, (state) => {
      state.post = [];
      state.isLoading = true;
      state.error = "something went wrong";
    });
    /*************************************** */
    builder.addCase(renderPosts.pending, (state) => {
      state.post = [];
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(renderPosts.fulfilled, (state , action) => {
      state.isLoading = false;
      state.error = "";
      state.post  = action.payload;
    });
    builder.addCase(renderPosts.rejected, (state) => {
      state.post = [];
      state.isLoading = true;
      state.error = "something went wrong";
    });
  },
});

export default postSlice.reducer;
