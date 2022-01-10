import { VFC } from 'react';

import { Spinner } from 'components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { type User } from 'types/User';

type Props = {
  users: User[];
  isLoading?: boolean;
};

export const UsersList: VFC<Props> = ({ users = [], isLoading = false }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.userId}>
          <Link to={`/users/${user.userId}`}>
            <span>{user.userName}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
