export const USER_MESSAGES = {
  FULLNAME_MESSAGE: 'Please enter at least 1 character',
  EMAIL_MESSAGE: 'Please enter a valid email',
  PASSWORD_MESSAGE:
    'Password must be between 8 and 16 characters, including one number, one uppercase letter, and one lowercase letter',
  PHONE_MESSAGE: 'Vui lòng nhập số điện thoại hợp lệ',
} as const;

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
} as const;

export const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

export const PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
