import { combineReducers } from '@reduxjs/toolkit';

import { allUsersSlice } from './allUsers/allUsersSlice';
import { userSlice } from './user/userSlice';

export const usersReducer = combineReducers({
  allUsers: allUsersSlice.reducer,
  user: userSlice.reducer,
});
