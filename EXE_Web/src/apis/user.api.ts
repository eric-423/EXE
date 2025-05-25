import http from '@/utils/http';

export const USER_SIGN_UP_KEY = 'USER_SIGN_UP_KEY';
export const GET_ME_QUERY_KEY = 'GET_ME_QUERY_KEY';

export const signUp = (phoneNumber: string) => http.post('/customer/sign-up', { phoneNumber });

export const sendOTP = (phoneNumber: string) => http.post('/verify-code/send?mode=dev', { phoneNumber });

export const verifyOTP = (phoneNumber: string, otp: string) =>
  http.post(`/verify-code/verify?phoneNumber=${phoneNumber}&code=${otp}`);

export const signIn = (data: { phoneNumber: string; password: string }) => http.post('/customer/sign-in', data);

export const changePassword = (data: { phoneNumber: string; password: string }) =>
  http.post('/customer/change-password', data);

export const refetchToken = (refresh: string) => http.post(`/token/refresh?token=${refresh}`);

export const refetchUserData = (userId: number) => http.get(`/customer/profile/${userId}`);
