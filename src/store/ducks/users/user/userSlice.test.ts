import { Action } from '@reduxjs/toolkit';
import { User } from 'types/User';
import { userSlice, UserState } from './userSlice';

test('初期状態が返却されること', () => {
  // const action = userSlice.actions.loadUserStarted();
  expect(userSlice.reducer(undefined, {} as Action)).toEqual({
    selectedUser: undefined,
    loading: false,
  });
});

test('ロード開始アクションを処理すること', () => {
  const previousState: UserState = {
    selectedUser: undefined,
    loading: false,
  };
  expect(
    userSlice.reducer(previousState, userSlice.actions.loadUserStarted()),
  ).toEqual({
    selectedUser: undefined,
    loading: true,
  });
});

test('ロード成功アクションを処理すること', () => {
  const previousState: UserState = {
    selectedUser: undefined,
    loading: true,
  };
  const user: User = {
    userId: 1,
    userName: 'foo',
    createdAt: '2021-10-10',
    createdBy: 'bar',
    updatedAt: '2021-10-10',
    updatedBy: 'bar',
  };
  expect(
    userSlice.reducer(
      previousState,
      userSlice.actions.loadUserSuccess({ user }),
    ),
  ).toEqual({ ...previousState, selectedUser: user, loading: false });
});
