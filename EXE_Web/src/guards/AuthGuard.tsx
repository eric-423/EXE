import { LoadingSpinner } from '@/components/common/loading-spinner';
import { config } from '@/configs/app';
import { useAuth } from '@/hooks';

import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

// AuthGuard is component that will be used to protect routes
// that should only be accessed by authenticated users.
const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  if (!isAuthenticated) return <Navigate to={config.routes.login} replace />;

  return <>{children}</>;
};

export default AuthGuard;
