import configs from '@/configs';

import axios, { AxiosError, AxiosInstance } from 'axios';

import { HTTP_STATUS } from './constants';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './cookies';

class Http {
  private accessToken: string;
  private refreshToken: string;
  instance: AxiosInstance;

  constructor() {
    this.accessToken = getAccessToken();
    this.refreshToken = getRefreshToken();
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response) => {
        const { url, method } = response.config;
        if (
          (method === 'post' && url?.includes('/verify-code/verify')) ||
          (method === 'post' && url?.includes('sign-in')) ||
          (method === 'post' && url?.includes('token/refresh'))
        ) {
          this.accessToken = response.data.data.access_token;
          this.refreshToken = response.data.data.refresh_token;
          console.log('Access Token:', this.accessToken);
          setAccessToken(this.accessToken);
          setRefreshToken(this.refreshToken);
        } else if (url === configs.routes.logout) {
          this.accessToken = '';
          this.refreshToken = '';
          removeAccessToken();
          removeRefreshToken();
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
          removeAccessToken();
          removeRefreshToken();
        }

        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
