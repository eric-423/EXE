import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';

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
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
