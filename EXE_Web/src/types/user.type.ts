import { SuccessResponse } from './response.type';

export interface User {
  id: string;
  fullName: string;
  email: string | null;
  phone: string;
  address: string;
  isActive: boolean;
  dateOfBirth: string | null;
  note: string | null;
  createdAt: string;
  memberPoint: number;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: string;
}

export type UserResponse = SuccessResponse<{
  user: User;
}>;

export type CreateAccountResponse = SuccessResponse<{
  id: string;
}>;

export type VerifyTokenForgotPasswordResponse = SuccessResponse<{
  success: boolean;
}>;
