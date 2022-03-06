import { isObject, isString, isDateString, isArray } from 'utils/typeUtils';
import { isNumber } from '../utils/typeUtils';

export type User = {
  userId: number;
  userName: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
};

export const isUser = (arg: unknown): arg is User => {
  const user = arg as User;

  return (
    isObject(user) &&
    isNumber(user.userId) &&
    isString(user.userName) &&
    isDateString(user.createdAt) &&
    isString(user.createdBy) &&
    isDateString(user.updatedAt) &&
    isString(user.updatedBy)
  );
};

export const isUsers = (args: unknown): args is User[] => isArray(args, isUser);
