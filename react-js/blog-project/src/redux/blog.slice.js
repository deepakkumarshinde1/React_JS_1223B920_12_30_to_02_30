import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState: {
    blogList: [],
    user: null,
  },
  reducers: {
    userLogin(state, action) {
      console.log(action);
    },
  },
});

export default BlogSlice;
