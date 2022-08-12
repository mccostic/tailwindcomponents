import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./actions/dashboardSlice";
import authReducer from "./actions/authSlice"

export const store = configureStore({
  reducer: {
    tc: dashboardReducer,
    auth: authReducer,
  },
});
