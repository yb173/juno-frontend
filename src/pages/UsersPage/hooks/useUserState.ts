import { useCallback } from 'react';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { getUser } from 'api/apiClient';
import { userSlice } from 'store/ducks/users/user/userSlice';

export const useUsersState = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.users.user.selectedUser);
  const loading = useAppSelector((state) => state.users.user.loading);

  const { loadUserStarted, loadUserSuccess } = userSlice.actions;

  const fetchUser = useCallback(
    async (id: number) => {
      dispatch(loadUserStarted());
      const res = await getUser(+id);
      dispatch(loadUserSuccess({ user: res }));
    },
    [dispatch, loadUserStarted, loadUserSuccess],
  );

  return { user, loading, fetchUser } as const;
};
