import { configureStore } from "@reduxjs/toolkit";
import { mangasApi } from "../features/mangasApi";
import  shopReducer  from "../features/shopSlice.tsx";

export const store = configureStore({
  reducer: {
    [mangasApi.reducerPath]: mangasApi.reducer,
    shop: shopReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mangasApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
