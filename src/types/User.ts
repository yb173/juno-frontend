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
    typeof user === 'object' &&
    user !== null &&
    typeof user.userId === 'number' &&
    typeof user.userName === 'string' &&
    typeof user.createdAt === 'string' &&
    typeof user.createdBy === 'string' &&
    typeof user.updatedAt === 'string' &&
    typeof user.updatedBy === 'string'
  );
};

export const isUsers = (args: unknown[]): args is User[] =>
  !args.some((arg) => !isUser(arg));
