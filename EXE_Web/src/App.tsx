import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CartProvider } from './contexts/cart/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnHover
            theme='light'
          />
        </CookiesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
