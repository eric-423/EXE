import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { Button } from '@/components/ui/button';

import { BotMessageSquare } from 'lucide-react';
import { Outlet } from 'react-router-dom';

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
      <div className='fixed bottom-12 right-12 z-50'>
        <Button
          size='lg'
          className='!p-0 bg-foreground text-gray-50 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 shadow-lg transition-colors duration-300 w-16 h-16 gap-0 rounded-full'
          onClick={handleChatbotClick}
        >
          <BotMessageSquare className='h-29 w-29' />
          <span className='sr-only'>Open</span>
        </Button>
        {open && (
          //Embed the script to load the chatbot
          <></>
        )}
      </div>
    </>
  );
};

export default MainLayout;
