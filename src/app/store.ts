import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import fileTreeSlice from "./features/fileTree/fileTreeSlice";
// Default export from fileTreeSlice

const store = configureStore({
  reducer: {
    fileTree: fileTreeSlice, // Correctly using fileTreeSlice's reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Fixing useAppDispatch
export default store; // Correct default export
