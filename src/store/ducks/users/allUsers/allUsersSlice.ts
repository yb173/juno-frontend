import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from 'types/User';

interface AllUsersState {
  users: User[];
  loading: boolean;
}

const initialState: AllUsersState = {
  users: [],
  loading: false,
};

export const allUsersSlice = createSlice({
  name: 'allUsers',
  // `createSlice` は state の型を `initialState` から推論する
  initialState,
  reducers: {
    loadUsersStarted: (state) => {
      state.users = [];
      state.loading = true;
    },
    loadUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.loading = false;
    },
  },
});
