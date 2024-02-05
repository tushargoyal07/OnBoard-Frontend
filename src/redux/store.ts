import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice.ts";

function makeStore() {
  return configureStore({
    reducer: {
      nav: navReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
