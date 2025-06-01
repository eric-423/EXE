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
const orderGuardLazy = async () => ({
  Component: (await import('@/guards/OrderGuard')).default,
});
const paymentGuardLazy = async () => ({
  Component: (await import('@/guards/PaymentGuard')).default,
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
            path: configs.routes.profile,
            lazy: async () => ({
              Component: (await import('@/pages/Profile')).default,
            }),
          },
          {
            lazy: orderGuardLazy,
            children: [
              {
                path: configs.routes.checkout,
                lazy: async () => ({
                  Component: (await import('@/pages/Checkout')).default,
                }),
              },
            ],
          },
          {
            lazy: paymentGuardLazy,
            children: [
              {
                path: configs.routes.paymentFailed,
                lazy: async () => ({
                  Component: (await import('@/pages/PaymentResult')).PaymentFailed,
                }),
              },
              {
                path: configs.routes.paymentSuccess,
                lazy: async () => ({
                  Component: (await import('@/pages/PaymentResult')).PaymentSuccess,
                }),
              },
            ],
          },
        ],
      },
    ],
  },
  // Not found route
  {
    path: configs.routes.notFound,
    lazy: async () => ({
      Component: (await import('@/pages/404')).default,
    }),
  },

  // Error routes
  {
    path: configs.routes.notFound,
    lazy: async () => ({
      Component: (await import('@/pages/404')).default,
    }),
  },
]);

export default router;
