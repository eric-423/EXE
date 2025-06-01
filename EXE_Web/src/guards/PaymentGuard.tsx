import configs from '@/configs';
import { getCookie } from '@/utils/cookies';

import { FC, PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PaymentGuard: FC<PropsWithChildren> = () => {
  const isPaying = getCookie('is_paying') === true;

  if (!isPaying) return <Navigate to={configs.routes.home} replace />;

  return <Outlet />;
};
export default PaymentGuard;
