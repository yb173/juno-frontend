import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getUsers } from 'api/apiClient';
import { allUsersSlice } from 'store/ducks/users/allUsers/allUsersSlice';

export const useUsersState = () => {
  const users = useAppSelector((state) => state.users.allUsers.users);
  const loading = useAppSelector((state) => state.users.allUsers.loading);

  const dispatch = useAppDispatch();
  const { loadUsersStarted, loadUsersSuccess } = allUsersSlice.actions;

  const fetchUsers = useCallback(async () => {
    dispatch(loadUsersStarted());
    const res = await getUsers();
    dispatch(loadUsersSuccess(res));
  }, [dispatch, loadUsersStarted, loadUsersSuccess]);

  return { users, loading, fetchUsers } as const;
};
