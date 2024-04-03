import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";
import uploadReducer from "./uploadSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    posts:postReducer,
    upload:uploadReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchApp = typeof store.dispatch;

export default store;
