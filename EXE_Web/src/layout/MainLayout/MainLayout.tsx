import { Button } from '@/components/ui/button';

import { BotMessageSquare } from 'lucide-react';
import { Outlet } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';

const MainLayout = () => {
  const open = false;
  const handleChatbotClick = () => {};
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
