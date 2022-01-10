import { VFC } from 'react';
import { Helmet } from 'react-helmet-async';

import { HomeButton } from 'containers/HomeButton';
import { User } from 'types/User';
import { UsersList } from './UsersList';

type Props = {
  users: User[];
  isLoading?: boolean;
};

export const Users: VFC<Props> = ({ users, isLoading = false }) => (
  <>
    <Helmet>
      <title>Juno | ユーザ一覧</title>
    </Helmet>
    <header>
      <h1>ユーザ一覧</h1>
    </header>
    <hr />
    <UsersList users={users} isLoading={isLoading} />
    <HomeButton />
  </>
);
