import { config } from '@/configs/app';
import { useAuth } from '@/hooks';

import { FC, PropsWithChildren } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate } from 'react-router-dom';

// AuthGuard is component that will be used to protect routes
// that should only be accessed by authenticated users.
const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isInitialized, isAuthenticated, user } = useAuth();

  if (!isInitialized || !user) return <Spinner animation='border' />;

  if (!isAuthenticated) return <Navigate to={config.routes.landing} replace />;

  return <>{children}</>;
};

export default AuthGuard;
