'use client';

import { LoadingSpinner } from '@/components/common/loading-spinner';
import { config } from '@/configs/app';
import { useAuth } from '@/hooks';

import { type FC, type PropsWithChildren, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// AuthGuard is component that will be used to protect routes
// that should only be accessed by authenticated users.
const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isAuthenticated } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Add a small delay before redirecting to prevent flickering
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Wait a short moment to ensure the auth state is stable
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (shouldRedirect) {
    return <Navigate to={config.routes.login} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
