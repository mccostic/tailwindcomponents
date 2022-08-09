import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./actions/actionTypes";

export const store = configureStore({
  reducer: {
    tc: dashboardReducer
  },
});
