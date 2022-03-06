import { useEffect, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

import { BackButton } from 'containers/BackButton';
import { Spinner } from 'components/Spinner/Spinner';
import { useUsersState } from '../hooks/useUserState';

export const UserPage: VFC = () => {
  const { id = '' } = useParams();

  const { user, loading, fetchUser } = useUsersState();

  const [input, setInput] = useState<string>('');
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };
  const isError = input === '';

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
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We will never share your email.</FormHelperText>
      </FormControl>

      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>
            Enter the email youd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <BackButton />
    </>
  );

  // return <Navigate to="/" replace />;
};
