import ky, { Options } from 'ky';
import { isUser, isUsers, type User } from 'types/User';
import { DEFAULT_API_OPTIONS } from './config';

export const getUsers = async (options?: Options): Promise<User[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('user', mergedOptions);
  const users = (await response.json()) as unknown[];

  if (!isUsers(users)) {
    throw Error('API type error');
  }

  return users;
};

export const getUser = async (
  userId: number,
  options?: Options,
): Promise<User> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`user/${userId}`, mergedOptions);
  const user = (await response.json()) as unknown;

  if (!isUser(user)) {
    throw Error('API type error');
  }

  return user;
};
