// useAppDispatch.ts
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/slices/RootSlice';


export const store = configureStore({
  reducer: rootReducer,

});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
