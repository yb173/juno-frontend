import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'types/User';

export interface UserState {
  selectedUser: User | undefined;
  loading: boolean;
}

export const initialState: UserState = {
  selectedUser: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` は state の型を `initialState` から推論する
  initialState,
  reducers: {
    loadUserStarted: (state) => {
      state.selectedUser = undefined;
      state.loading = true;
    },
    loadUserSuccess: (state, action: PayloadAction<{ user: User }>) => {
      state.selectedUser = action.payload.user;
      state.loading = false;
    },
  },
});
