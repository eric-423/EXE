import bannerImage from '@/assets/images/Home - Banner.jpg';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import { useState } from 'react';

const Login = () => {
  useDocumentTitle('Đăng nhập');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className='min-h-screen w-full'>
      <div className='flex min-h-screen'>
        {/* Image Section */}
        <div className='hidden md:block md:w-1/2 relative overflow-hidden'>
          <img
            src={bannerImage || '/placeholder.svg'}
            alt='Cơm tấm banner'
            className='w-full h-full object-cover brightness-[0.8]'
          />
        </div>

        {/* Form Section */}
        <div className='w-full md:w-1/2 bg-background flex items-center justify-center p-4'>
          <div className='w-full max-w-[500px] px-2 md:px-4'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='font-bold text-2xl md:text-3xl'>
                <span className='text-primary'>Tấm</span> ngon, <span className='text-secondary'>Tắc</span> nhớ!
              </h1>
            </div>
            <p className='mb-6 text-foreground'>Thương hiệu cơm tấm hàng đầu dành cho sinh viên.</p>

            {/* Form */}
            <form className='space-y-4'>
              <div>
                <input
                  type='tel'
                  placeholder='Số điện thoại'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className='w-full px-6 py-4 border border-input rounded-lg bg-background text-foreground h-[60px] focus:outline-none focus:ring-2 focus:ring-ring'
                />
              </div>

              <button
                type='submit'
                className='w-full py-4 bg-primary text-primary-foreground border-none rounded-lg text-lg font-medium h-[60px] flex items-center justify-center hover:opacity-90 transition-opacity'
              >
                Đăng nhập
              </button>

              <div className='relative flex items-center py-4'>
                <div className='flex-grow border-t border-border'></div>
                <span className='flex-shrink mx-4 text-muted-foreground'>Bạn là người nhà của Tấm Tắc?</span>
                <div className='flex-grow border-t border-border'></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
