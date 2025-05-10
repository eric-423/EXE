export interface User {
  id: string;
  fullName: string;
  email: string;
}

export type GetAllUsersResponse = User[];

export type GetUserResponse = User;

export type CreateUserResponse = User;

export type UpdateUserResponse = User;

export type UserWithPercent = User & { percent: number; matchedLearn: number; matchedTeach: number };
