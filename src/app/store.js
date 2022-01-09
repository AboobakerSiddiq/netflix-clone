import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: {
    composeWithDevTools,
  },
});
