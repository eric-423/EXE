import http from '@/utils/http';
import JwtDecode from '@/utils/jwtDecode';

export const USER_SIGN_UP_KEY = 'USER_SIGN_UP_KEY';
export const GET_ME_QUERY_KEY = 'GET_ME_QUERY_KEY';

export const signUp = (phoneNumber: string) => http.post('/customer/sign-up', { phoneNumber });

export const sendOTP = (phoneNumber: string) => http.post('/verify-code/send?mode=', { phoneNumber });

export const verifyOTP = (phoneNumber: string, otp: string) =>
  http.post(`/verify-code/verify?phoneNumber=${phoneNumber}&code=${otp}`);

export const signIn = (data: { phoneNumber: string; password: string }) => http.post('/customer/sign-in', data);

export const changePassword = (data: { phoneNumber: string; password: string }) =>
  http.post('/customer/change-password', data);

export const refetchToken = (refresh: string) => http.post(`/token/refresh?token=${refresh}`);

export const refetchUserData = (token: string) => {
  const data = refetchToken(token);
  return data.then((response) => {
    if (response.data) {
      const decodedData = JwtDecode(response.data.data.access_token);
      const userData = {
        id: decodedData.id,
        phoneNumber: decodedData.phone,
        role: decodedData.role,
        exp: decodedData.exp,
      };
      return {
        accessToken: response.data.data.access_token,
        refreshToken: response.data.data.refresh_token,
        userData,
      };
    }
    throw new Error('Failed to refetch user data');
  });
};

export const getMe = (userId: number) => http.get(`/customer/profile/${userId}`);
