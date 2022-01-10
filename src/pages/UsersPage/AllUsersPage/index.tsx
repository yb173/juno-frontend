import { VFC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { getUsers } from 'api/apiClient';
import { type User } from 'types/User';
import { Users } from './Users';

export const AllUsersPage: VFC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const f = async () => {
      const res = await getUsers();
      setUsers(res);
    };
    void f();
  }, []);

  return (
    <>
      <Users users={users} isLoading={isLoading} />
      <Outlet />
    </>
  );
};
