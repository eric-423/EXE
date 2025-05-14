import configs from '@/configs';

import { createBrowserRouter } from 'react-router-dom';

const mainLayoutLazy = async () => ({
  Component: (await import('@/layout/MainLayout')).default,
});

const guestGuardLazy = async () => ({
  Component: (await import('@/guards/GuestGuard')).default,
});

const router = createBrowserRouter([
  // Guest routes
  {
    lazy: guestGuardLazy,
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
            path: configs.routes.login,
            lazy: async () => ({
              Component: (await import('@/pages/Login')).default,
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
]);

export default router;
