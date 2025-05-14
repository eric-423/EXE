import config from '@/configs';

import { Cookies } from 'react-cookie';

const cookies = new Cookies(null, { path: '/' });

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: string) => {
  cookies.set(name, value);
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};

// Access token
export const getAccessToken = () => {
  return getCookie(config.cookies.accessToken);
};

export const setAccessToken = (token: string) => {
  setCookie(config.cookies.accessToken, token);
};

export const removeAccessToken = () => {
  removeCookie(config.cookies.accessToken);
};

// Refresh token
export const getRefreshToken = () => {
  return getCookie(config.cookies.refreshToken);
};

export const setRefreshToken = (token: string) => {
  setCookie(config.cookies.refreshToken, token);
};

export const removeRefreshToken = () => {
  removeCookie(config.cookies.refreshToken);
};
