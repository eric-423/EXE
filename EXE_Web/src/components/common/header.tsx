'use client';

import logo from '@/assets/full-logo.svg';
import { Button } from '@/components/ui/button';

import { Bell, LogIn, Menu, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full bg-background border-b shadow-sm'>
      <div className='container mx-auto px-5 md:px-16 py-0 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2'>
          <div className='relative w-30'>
            <img src={logo} alt='Tấm Tắc Logo' className='mx-auto w-30' />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <NavLinks />
        </nav>

        {/* Desktop Action Buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <ActionButtons />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden text-primary'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-background border-t py-4 px-4'>
          <div className='container mx-auto px-4 flex flex-col space-y-4'>
            <nav className='flex flex-col space-y-3'>
              <NavLinks mobile />
            </nav>
            <div className='flex justify-center space-x-6 pt-4 border-t'>
              <ActionButtons mobile />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const links = [
    { href: '/about', label: 'Về Tấm Tắc' },
    { href: '/order', label: 'Đặt Hàng' },
    { href: '/ai-menu', label: 'Thực đơn từ AI' },
    { href: '/story', label: 'Chuyện Cơm Tấm' },
    { href: '/franchise', label: 'Nhượng Quyền' },
    { href: '/stores', label: 'Cửa Hàng' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`font-medium text-primary group transition-all duration-300 ease-in-out ${mobile ? 'text-lg py-4' : ''}`}
        >
          <span className='bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
            {link.label}
          </span>
        </Link>
      ))}
    </>
  );
}

function ActionButtons({ mobile = false }: { mobile?: boolean }) {
  const user = false;
  return (
    <>
      {user ? (
        <>
          <Button
            variant='ghost'
            size={mobile ? 'default' : 'icon'}
            className='text-primary hover:text-[#B84A0E] hover:bg-[#FFE8D6]'
          >
            <Bell size={mobile ? 20 : 24} />
            {mobile && <span className='ml-2'>Thông báo</span>}
          </Button>
          <Button
            variant='ghost'
            size={mobile ? 'default' : 'icon'}
            className='text-primary hover:text-[#B84A0E] hover:bg-[#FFE8D6]'
          >
            <User size={mobile ? 20 : 24} />
            {mobile && <span className='ml-2'>Tài khoản</span>}
          </Button>
        </>
      ) : (
        <>
          <Button
            variant='ghost'
            size={mobile ? 'default' : 'icon'}
            className='text-primary hover:text-[#B84A0E] hover:bg-[#FFE8D6]'
          >
            <LogIn size={mobile ? 20 : 24} />
            {mobile && <span className='ml-2'>Đăng nhập</span>}
          </Button>
        </>
      )}
      <Button
        variant='ghost'
        size={mobile ? 'default' : 'icon'}
        className='text-[#E05E11] hover:text-[#B84A0E] hover:bg-[#FFE8D6] relative'
      >
        <ShoppingCart size={mobile ? 20 : 24} />
        {mobile && <span className='ml-2'>Giỏ hàng</span>}
        <span className='absolute -top-1 -right-1 bg-[#E05E11] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
          2
        </span>
      </Button>
    </>
  );
}
