import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  console.log('MainLayout');
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
