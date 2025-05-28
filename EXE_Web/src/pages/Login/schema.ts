import { PHONE_REGEX } from '@/utils/constants';

import { z } from 'zod';

// export interface AuthFormValues {
//   phoneNumber: string;
//   password?: string;
//   otp?: string;
//   confirmPassword?: string;
// }

// Phone number validation schema (Step 1)
export const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .refine((val) => PHONE_REGEX.test(val), {
      message: 'Số điện thoại không hợp lệ',
    }),
  password: z.string().optional(),
  otp: z.string().optional(),
  confirmPassword: z.string().optional(),
});

// Login validation schema (Step 2 - existing user)
export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .refine((val) => PHONE_REGEX.test(val), {
      message: 'Số điện thoại không hợp lệ',
    }),
  password: z.string().min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
  otp: z.string().optional(),
  confirmPassword: z.string().optional(),
});

// OTP validation schema (Step 2 - new user)
export const otpSchema = z.object({
  phoneNumber: z.string(),
  password: z.string().optional(),
  otp: z.string().min(6, { message: 'Mã OTP phải có đúng 6 số' }).max(6, { message: 'Mã OTP phải có đúng 6 số' }),
  confirmPassword: z.string().optional(),
});

// Registration validation schema (Step 3 - new user)
const registerSchemaObject = z.object({
  phoneNumber: z.string(),
  password: z.string().min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
  confirmPassword: z.string(),
  otp: z.string().optional(),
});

export const registerSchema = registerSchemaObject.refine((data) => data.password === data.confirmPassword, {
  message: 'Mật khẩu không khớp',
  path: ['confirmPassword'],
});

// Combined schema for the entire form
export const AuthFormSchema = z.discriminatedUnion('step', [
  z.object({ step: z.literal('phone'), ...phoneSchema.shape }),
  z.object({ step: z.literal('login'), ...loginSchema.shape }),
  z.object({ step: z.literal('otp'), ...otpSchema.shape }),
  z.object({ step: z.literal('register'), ...registerSchemaObject.shape }),
]);

export type AuthFormValues = z.infer<typeof AuthFormSchema>;

export default loginSchema;
