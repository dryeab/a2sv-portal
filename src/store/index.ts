import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/store/Header";

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
