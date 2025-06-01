import { PHONE_REGEX } from '@/utils/constants';

import loginSchema, { otpSchema, phoneSchema, registerSchema } from '../schema';

import { zodResolver } from '@hookform/resolvers/zod';

export type FormFieldType = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  control?: {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
  };
  errorMessage: string;
};

export const FORM_FIELDS = {
  phoneNumber: {
    label: 'Số điện thoại',
    name: 'phoneNumber',
    type: 'text',
    placeholder: 'Nhập số điện thoại của bạn',
    control: {
      required: true,
      pattern: PHONE_REGEX,
    },
    errorMessage: 'Số điện thoại không hợp lệ',
  },
  password: {
    label: 'Mật khẩu',
    name: 'password',
    type: 'password',
    placeholder: 'Nhập mật khẩu của bạn',
    control: {
      required: true,
      minLength: 6,
    },
    errorMessage: 'Mật khẩu phải có ít nhất 6 ký tự',
  },
  confirmPassword: {
    label: 'Xác nhận mật khẩu',
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Nhập lại mật khẩu của bạn',
    control: {
      required: true,
      minLength: 6,
    },
    errorMessage: 'Mật khẩu không khớp',
  },
  otp: {
    label: 'Mã xác thực',
    name: 'otp',
    type: 'text',
    placeholder: 'Nhập mã xác thực',
    control: {
      required: true,
    },
    errorMessage: 'Mã xác thực không hợp lệ',
  },
};

export const SET_FORM_FIELDS = {
  phone: [FORM_FIELDS.phoneNumber],
  login: [FORM_FIELDS.phoneNumber, FORM_FIELDS.password],
  otp: [FORM_FIELDS.otp],
  register: [FORM_FIELDS.password, FORM_FIELDS.confirmPassword],
};

// Get title and subtitle based on current step
export const FORM_CONTENTS = {
  phone: {
    title: 'Xác thực số điện thoại',
    description: 'Thương hiệu cơm tấm hàng đầu dành cho sinh viên',
  },
  login: {
    title: 'Đăng nhập',
    description: 'Chào mừng bạn quay lại',
  },
  otp: {
    title: 'Xác thực OTP',
    description: 'Mã xác thực đã được gửi đến số điện thoại của bạn',
  },
  register: {
    title: 'Đăng ký mật khẩu',
    description: 'Đăng ký mật khẩu để đăng nhập lần sau',
  },
  success: {
    title: 'Đăng nhập thành công',
    description: 'Bạn đã đăng nhập thành công',
  },
};

export const FORM_RESOLVERS = {
  phone: zodResolver(phoneSchema),
  login: zodResolver(loginSchema),
  otp: zodResolver(otpSchema),
  register: zodResolver(registerSchema),
};
