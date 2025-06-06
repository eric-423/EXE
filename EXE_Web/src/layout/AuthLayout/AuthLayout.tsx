import { Outlet } from 'react-router-dom';

import Header from '../MainLayout/components/header';

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex flex-col w-full ~bg-muted/50'>
      <Header />
      <div className='w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-grow flex-col'>
        <div className='flex flex-grow flex-col'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
