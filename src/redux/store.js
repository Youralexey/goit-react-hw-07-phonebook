import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../apiService";

export default configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiService.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});
