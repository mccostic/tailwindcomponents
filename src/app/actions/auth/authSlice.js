import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false
};

export const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }
});

export default AuthSlice.reducer;
