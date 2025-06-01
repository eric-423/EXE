import configs from '@/configs';

import { createBrowserRouter } from 'react-router-dom';

const mainLayoutLazy = async () => ({
  Component: (await import('@/layout/MainLayout')).default,
});

const guestGuardLazy = async () => ({
  Component: (await import('@/guards/GuestGuard')).default,
});

const customerGuardLazy = async () => ({
  Component: (await import('@/guards/CustomerGuard')).default,
});

const authGuardLazy = async () => ({
  Component: (await import('@/guards/CustomerGuard')).default,
});

const router = createBrowserRouter([
  // Public routes
  {
    lazy: customerGuardLazy,
    children: [
      {
        lazy: mainLayoutLazy,
        children: [
          {
            path: configs.routes.home,
            lazy: async () => ({
              Component: (await import('@/pages/Home')).default,
            }),
          },
          {
            path: configs.routes.menu,
            lazy: async () => ({
              Component: (await import('@/pages/Menu')).default,
            }),
          },
        ],
      },
    ],
  },
  {
    lazy: guestGuardLazy,
    children: [
      {
        lazy: mainLayoutLazy,
        children: [
          {
            path: configs.routes.login,
            lazy: async () => ({
              Component: (await import('@/pages/Login')).default,
            }),
          },
        ],
      },
    ],
  },
  // Authenticated routes
  {
    lazy: authGuardLazy,
    children: [
      {
        lazy: mainLayoutLazy,
        children: [
          {
            path: configs.routes.myOrders,
            lazy: async () => ({
              Component: (await import('@/pages/MyOrders')).default,
            }),
          },
          {
            path: configs.routes.checkout,
            lazy: async () => ({
              Component: (await import('@/pages/Checkout')).default,
            }),
          },
          {
            path: configs.routes.paymentResult,
            lazy: async () => ({
              Component: (await import('@/pages/PaymentResult')).default,
            }),
          },
        ],
      },
    ],
  },
]);

export default router;
