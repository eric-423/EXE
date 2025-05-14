import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import router from './routes';

export default function App() {
  return (
    // <ThemeProvider>
    //   <QueryClientProvider client={queryClient}>
    //     <AuthProvider>
    //       <RouterProvider router={router} />
    //       <Toaster position='top-right' richColors duration={1500} />
    //     </AuthProvider>
    //   </QueryClientProvider>
    // </ThemeProvider>
    // <ThemeProvider>
    <ThemeProvider defaultTheme='system' storageKey='theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
