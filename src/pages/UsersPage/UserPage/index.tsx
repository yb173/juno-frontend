import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';

import { getUser } from 'api/apiClient';
import { type User } from 'types/User';
import { BackButton } from 'containers/BackButton';
import { Spinner } from 'components/Spinner/Spinner';

export const UserPage: VFC = () => {
  const { id = '' } = useParams();

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const f = async () => {
      const res = await getUser(+id);
      setUser(res);
    };
    void f();
  }, [id]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <>
      <span>{user.userId}</span>
      <span>{user.userName}</span>
      <span>{user.createdAt}</span>
      <span>{user.createdBy}</span>
      <span>{user.updatedAt}</span>
      <span>{user.updatedBy}</span>
      <BackButton />
    </>
  );

  // return <Navigate to="/" replace />;
};
