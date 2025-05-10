// import { createBrowserRouter, Outlet } from 'react-router-dom';

// import { config } from './config/app';
// import AuthGuard from './guards/AuthGuard';
// import GuestGuard from './guards/GuestGuard';
// import { VerifiedEmailGuard } from './guards';

// const router = createBrowserRouter([
//   // Guest routes
//   {
//     element: (
//       <GuestGuard>
//         <Outlet />
//       </GuestGuard>
//     ),
//     children: [
//       {
//         lazy: async () => ({
//           Component: (await import('./layout/AuthLayout')).default,
//         }),
//         // children: [
//         //   {
//         //     path: config.routes.login,
//         //     lazy: async () => ({
//         //       Component: (await import('./pages/Login')).default,
//         //     }),
//         //   },
//         // ],
//       },
//     ],
//   },

//   // Auth routes
//   {
//     element: (
//       <VerifiedEmailGuard>
//         <AuthGuard>
//           <Outlet />
//         </AuthGuard>
//       </VerifiedEmailGuard>
//     ),
//     children: [
//       {
//         path: config.routes.home,
//         lazy: async () => ({
//           Component: (await import('./layout/MainLayout')).default,
//         }),
//         children: [
//           {
//             index: true,
//             lazy: async () => ({
//               Component: (await import('./pages/Home')).default,
//             }),
//           },
          
//         ],
//       },
//     ],
//   },
//   // Not found route
//   {
//     path: config.routes.notFound,
//     lazy: async () => ({
//       Component: (await import('./pages/404')).default,
//     }),
//   },
// ]);

// export default router;
