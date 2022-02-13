import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './ducks/users/usersReducer';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// store 自身から `RootState` と `AppDispatch` の型を推論する
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
