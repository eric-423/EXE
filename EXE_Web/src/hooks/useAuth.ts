/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { refetchToken } from '@/apis/user.api';
import configs from '@/configs';
import { UserAuthData } from '@/types/user.type';
import { getCookie, removeAccessToken, removeRefreshToken } from '@/utils/cookies';
import JwtDecode from '@/utils/jwtDecode';

import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { useMutation } from '@tanstack/react-query';

const useAuth = () => {
  const [user, setUser] = useState<UserAuthData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [cookies] = useCookies([configs.cookies.accessToken, configs.cookies.refreshToken]);
  const accessToken = cookies[configs.cookies.accessToken];

  const { mutate: refreshTokenMutation, isPending: isLoading } = useMutation({
    mutationFn: () => refetchToken(cookies[configs.cookies.refreshToken]),
    onSuccess: (data) => {
      if (data?.data.access_token) {
        const decodedData = JwtDecode(data.data.access_token);
        const userData = {
          id: decodedData.id,
          phoneNumber: decodedData.phone,
          role: decodedData.role,
          exp: decodedData.exp,
        };
        setUser(userData);
        setIsAuthenticated(true);
      }
    },
    onError: (error) => {
      console.error('Token refresh failed:', error);
      removeAccessToken();
      removeRefreshToken();
      setUser(null);
      setIsAuthenticated(false);
    },
  });

  useEffect(() => {
    if (accessToken) {
      const decodedToken = JwtDecode(accessToken);
      if (!decodedToken || decodedToken.exp < Date.now() / 1000) return;
      const userData = {
        id: decodedToken.id,
        phoneNumber: decodedToken.phone,
        role: decodedToken.role,
        exp: decodedToken.exp,
        isNewUser: getCookie(configs.cookies.isNew),
      };
      setUser(userData);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [accessToken]);

  // Function to check token expiration
  const checkTokenExpiration = useCallback(() => {
    if (accessToken) {
      const decodedToken = JwtDecode(accessToken);

      // Check if the token is expired
      if (!decodedToken || decodedToken.exp < Date.now() / 1000) {
        refreshTokenMutation();
      }
    }
  }, [accessToken, cookies]);

  useEffect(() => {
    if (!accessToken) {
      setUser(null);
      setIsAuthenticated(false);
      return;
    }

    // Set up an interval to check token expiration every 5 seconds
    const intervalId = setInterval(checkTokenExpiration, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [checkTokenExpiration]);

  return { isLoading, user, isAuthenticated };
};

export default useAuth;
