import { configureStore } from '@reduxjs/toolkit';
import monsterSelectorReducer from '../features/monsterSlice';

export const store = configureStore({
  reducer: {
    monster: monsterSelectorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
