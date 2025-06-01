import { LoadingSpinner } from '@/components/common/loading-spinner';
import configs from '@/configs';
import { useCart } from '@/contexts/cart/CartContext';

import { FC, PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const OrderGuard: FC<PropsWithChildren> = () => {
  const { getTotalItems, isLoading: isCartLoading } = useCart();

  if (isCartLoading) return <LoadingSpinner />;

  if (getTotalItems() <= 0) return <Navigate to={configs.routes.home} replace />;

  return <Outlet />;
};
export default OrderGuard;
