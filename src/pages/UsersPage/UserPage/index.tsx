import { useEffect, VFC } from 'react';
import { useParams } from 'react-router-dom';

import { BackButton } from 'containers/BackButton';
import { Spinner } from 'components/Spinner/Spinner';
import { useUsersState } from '../hooks/useUserState';

export const UserPage: VFC = () => {
  const { id = '' } = useParams();

  const { user, loading, fetchUser } = useUsersState();

  useEffect(() => {
    void fetchUser(+id);
  }, [fetchUser, id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {user && (
        <>
          <span>{user.userId}</span>
          <span>{user.userName}</span>
          <span>{user.createdAt}</span>
          <span>{user.createdBy}</span>
          <span>{user.updatedAt}</span>
          <span>{user.updatedBy}</span>
        </>
      )}

      <BackButton />
    </>
  );

  // return <Navigate to="/" replace />;
};
