import { config } from '@/configs/app';
import { useAuth } from '@/hooks';

import { FC, PropsWithChildren } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, Outlet } from 'react-router-dom';
// GuestGuard is a component that will be used to protect routes
// that should only be accessed by unauthenticated users.
const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  console.log(children);
  const { isInitialized, isAuthenticated } = useAuth();

  // if (!isInitialized) return <Spinner animation='border' />;

  // if (isAuthenticated) return <Navigate to={config.routes.home} replace />;

  return <Outlet />;
};

export default GuestGuard;
