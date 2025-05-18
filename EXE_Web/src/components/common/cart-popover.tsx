'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { MOCKUP_CART_ITEMS } from '@/utils/mockupData';

import { ChevronRight, Edit, MapPin, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';

import ControlledButton from './controlled-button';
import { QuantitySelector } from './quantity-selector';

export function CartPopover() {
  const [open, setOpen] = useState(false);

  // Calculate total
  const subtotal = MOCKUP_CART_ITEMS.reduce((total, item) => total + item.productPrice * item.quantity, 0);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button variant='ghost' size={'icon'} className='text-primary hover:text-[#B84A0E] hover:bg-[#FFE8D6]'>
          <div className='relative flex items-center justify-center h-10 w-10 rounded-full transition-colors'>
            <ShoppingCart className='h-5 w-5 text-primary' />
            <Badge className='absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary hover:bg-primary'>
              {MOCKUP_CART_ITEMS.reduce((total, item) => total + item.quantity, 0)}
            </Badge>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[500px] p-0 rounded-xl border-none shadow-lg' align='end' sideOffset={8}>
        <div className='bg-background/30 rounded-xl p-7 overflow-hidden'>
          {/* Header */}
          <div className='pb-4 border-b border-foreground/30'>
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='font-bold text-lg'>Tấm Tắc Láng Đại học</h3>
                <div className='flex items-center text-sm text-gray-600 mt-1'>
                  <MapPin className='h-3.5 w-3.5 mr-1 flex-shrink-0' />
                  <p className='line-clamp-1'>Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh</p>
                </div>
              </div>
              <ControlledButton title='Đổi cửa hàng'>
                <Edit className='h-4 w-4' />
              </ControlledButton>
            </div>
          </div>

          {/* Cart Items */}
          <ScrollArea className='max-h-[320px] overflow-auto'>
            <div className='p-4 pl-0 space-y-4'>
              {MOCKUP_CART_ITEMS.map((item, index) => (
                <div key={item.productId} className='group'>
                  <div className='flex gap-3'>
                    {/* Remove button (visible on hover) */}
                    <button className='opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 flex-shrink-0 rounded-full bg-foreground/5 hover:bg-foreground/15 transition-colors flex items-center justify-center'>
                      <X className='h-3 w-3 text-foreground/50' />
                    </button>

                    {/* Item content */}
                    <div className='flex-grow'>
                      <div className='flex justify-between'>
                        <h4 className='font-medium'>{item.productName}</h4>
                        <div className='text-primary font-medium'>
                          {item.productPrice.toLocaleString()}đ × {item.quantity}
                        </div>
                      </div>

                      {item.note && item.note.length > 0 && (
                        <div className='text-sm text-gray-600 mt-1'>
                          <span className='font-medium'>Ghi chú:</span> {item.note}
                        </div>
                      )}
                      {/* Item actions */}
                      <div className='flex items-center justify-between mt-2'>
                        <QuantitySelector
                          value={item.quantity}
                          onIncrease={() => item.quantity + 1}
                          onDecrease={() => item.quantity - 1}
                        />

                        <div className='flex items-center gap-1'>
                          <ControlledButton>
                            <Edit className='h-3.5 w-3.5' />
                          </ControlledButton>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < MOCKUP_CART_ITEMS.length - 1 && <Separator className='mt-4 bg-foreground/10' />}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Subtotal */}
          <div className='pt-4 border-t border-gray-100'>
            <div className='flex justify-between items-center mb-4'>
              <span className='font-medium text-lg'>Tạm tính</span>
              <span className='font-bold text-xl text-primary'>{subtotal.toLocaleString()}đ</span>
            </div>

            <Button className='w-full h-12 bg-[#4CAF50] hover:bg-[#43A047] text-white rounded-lg font-medium'>
              Xác nhận đơn hàng
              <ChevronRight className='h-4 w-4 ml-1' />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
