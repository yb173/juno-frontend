import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

export const UsersPage: VFC = () => (
  <>
    <h1>ユーザページ</h1>
    <Outlet />
  </>
);
