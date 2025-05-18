'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

interface AddToCartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddToCartDrawer({ open, onOpenChange }: AddToCartDrawerProps) {
  const [mainQuantity, setMainQuantity] = useState(1);
  const [extras, setExtras] = useState({
    rice: 0,
    eggCake: 0,
    grilledRibs: 0,
  });

  const originalPrice = 123000;
  const discountPrice = 86000;

  // Calculate total price
  const calculateTotal = () => {
    let total = discountPrice * mainQuantity;
    total += extras.rice * 2000;
    total += extras.eggCake * 12000;
    total += extras.grilledRibs * 20000;
    return total;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  const handleQuantityChange = (item: string, value: number) => {
    if (item === 'main') {
      setMainQuantity(Math.max(1, mainQuantity + value));
    } else {
      setExtras({
        ...extras,
        [item]: Math.max(0, extras[item as keyof typeof extras] + value),
      });
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className='sm:max-w-[500px] p-0 bg-background overflow-hidden rounded-xl'>
        <div className='sticky top-0 z-10 bg-background pt-4 px-6'>
          <div className='flex items-center justify-between mb-2'>
            <DrawerTitle className='text-xl font-bold'>Thêm món ăn</DrawerTitle>
            <DrawerClose className='h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center'>
              <X className='h-4 w-4' />
              <span className='sr-only'>Close</span>
            </DrawerClose>
          </div>
          <Separator className='mb-4' />
        </div>

        <div className='px-6 pb-6 max-h-[80vh] overflow-y-auto custom-scrollbar'>
          {/* Main Dish */}
          <div className='flex gap-4 mb-6'>
            <div className='relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0'>
              <img src='/combo-dish.jpg' alt='COMBO - SÀ BÌ CHƯỞNG' className='object-cover' />
            </div>
            <div className='flex-grow'>
              <h3 className='font-bold text-lg'>COMBO - SÀ BÌ CHƯỞNG</h3>
              <ul className='text-sm text-gray-600 mt-1 mb-2'>
                <li>- Cơm sườn nướng, bì, chả trứng</li>
                <li>- Canh tự chọn</li>
                <li>- Nước ngọt tự chọn</li>
              </ul>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='font-bold text-[#E05E11]'>{formatPrice(discountPrice)}</span>
                  <span className='text-gray-500 text-sm line-through'>{formatPrice(originalPrice)}</span>
                  <Badge className='bg-[#E05E11]/10 text-[#E05E11] hover:bg-[#E05E11]/20 ml-1'>-30%</Badge>
                </div>
                <QuantitySelector
                  value={mainQuantity}
                  onDecrease={() => handleQuantityChange('main', -1)}
                  onIncrease={() => handleQuantityChange('main', 1)}
                />
              </div>
            </div>
          </div>

          {/* Extra Items */}
          <div className='mb-6'>
            <h3 className='font-medium text-lg mb-3'>Thức ăn dùng thêm</h3>
            <div className='space-y-3'>
              {[
                { id: 'rice', name: 'Cơm thêm', price: 2000 },
                { id: 'eggCake', name: 'Chả trứng hấp', price: 12000 },
                { id: 'grilledRibs', name: 'Sườn nướng', price: 20000 },
              ].map((extra) => (
                <div key={extra.id} className='flex items-center justify-between bg-white p-3 rounded-lg shadow-sm'>
                  <div>
                    <span className='font-medium'>{extra.name}</span>
                    <div className='text-sm text-gray-500'>+ {formatPrice(extra.price)}</div>
                  </div>
                  <QuantitySelector
                    value={extras[extra.id as keyof typeof extras]}
                    onDecrease={() => handleQuantityChange(extra.id, -1)}
                    onIncrease={() => handleQuantityChange(extra.id, 1)}
                    small
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Add to Cart Button */}
        <div className='sticky bottom-0 bg-background border-t border-gray-200 p-4'>
          <Button
            className='w-full bg-[#4CAF50] hover:bg-[#43A047] text-white h-12 rounded-lg'
            onClick={() => onOpenChange(false)}
          >
            <ShoppingBag className='h-5 w-5 mr-2' />
            {formatPrice(calculateTotal())} - Thêm vào giỏ hàng
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface QuantitySelectorProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  small?: boolean;
}

function QuantitySelector({ value, onDecrease, onIncrease, small = false }: QuantitySelectorProps) {
  return (
    <div className={`flex items-center ${small ? 'gap-1' : 'gap-2'}`}>
      <Button
        variant='outline'
        size={small ? 'icon-sm' : 'icon'}
        onClick={onDecrease}
        disabled={value <= 0}
        className={`rounded-full border-gray-300 ${small ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <Minus className={small ? 'h-3 w-3' : 'h-4 w-4'} />
      </Button>
      <span className={`font-medium ${small ? 'w-5' : 'w-6'} text-center`}>{value}</span>
      <Button
        variant='outline'
        size={small ? 'icon-sm' : 'icon'}
        onClick={onIncrease}
        className={`rounded-full border-gray-300 ${small ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <Plus className={small ? 'h-3 w-3' : 'h-4 w-4'} />
      </Button>
    </div>
  );
}
