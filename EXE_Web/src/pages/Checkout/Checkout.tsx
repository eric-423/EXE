'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { MOCKUP_CART_ITEMS } from '@/utils/mockupData';

import { Clock, CreditCard, Edit, MapPin, QrCode, ShieldCheck, User, Wallet } from 'lucide-react';
import { useState } from 'react';

import CheckoutSection from './components/checkout-section';

export default function CheckoutPage() {
  const cartItems = MOCKUP_CART_ITEMS;
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [deliveryTime, setDeliveryTime] = useState('now');

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  const discount1 = 23000; // Discount for items
  const discount2 = Math.round(subtotal * 0.05); // 5% promo discount
  const deliveryFee = 15000;
  const total = subtotal - discount1 - discount2 + (deliveryMethod === 'delivery' ? deliveryFee : 0);

  return (
    <div className='min-h-screen py-8 px-4 md:px-30'>
      <div className='container mx-auto max-w-6xl'>
        <h1 className='text-3xl font-bold text-center mb-8'>Xác nhận đơn hàng</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Customer Information */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Customer Information */}
            <Card>
              <CardContent className='space-y-4'>
                <CheckoutSection
                  title='Thông tin khách hàng'
                  className='mb-4'
                  icon={<User className='h-5 w-5 text-primary' />}
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='customerName'>Tên khách hàng</Label>
                      <Input id='customerName' placeholder='Nhập tên của bạn' defaultValue='Nguyễn Văn A' />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='customerPhone'>Số điện thoại</Label>
                      <Input id='customerPhone' placeholder='Nhập số điện thoại' defaultValue='0901234567' />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='customerEmail'>Email</Label>
                    <Input id='customerEmail' type='email' placeholder='Nhập email (không bắt buộc)' />
                  </div>
                  <Separator className='my-8 bg-foreground/20' />
                </CheckoutSection>

                <CheckoutSection
                  title='Thời gian nhận hàng'
                  className='mb-4'
                  icon={<Clock className='h-5 w-5 text-primary' />}
                >
                  <div className='flex items-center px-4'>
                    <Label htmlFor='scheduled'>Hẹn lịch nhận lúc</Label>
                    <div className='flex items-center space-x-2'>
                      <Input
                        type='time'
                        className='w-24'
                        defaultValue='17:45'
                        disabled={deliveryTime !== 'scheduled'}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                      />
                      <span>ngày</span>
                      <Input
                        type='date'
                        className='w-40'
                        defaultValue='2025-02-07'
                        disabled={deliveryTime !== 'scheduled'}
                      />
                    </div>
                  </div>
                  <Separator className='my-8 bg-foreground/20' />
                </CheckoutSection>

                <CheckoutSection
                  title='Phương thức thanh toán'
                  className='mb-4'
                  icon={<CreditCard className='h-5 w-5 text-primary' />}
                >
                  <div>
                    <RadioGroup
                      defaultValue='momo'
                      className='space-y-2'
                      onValueChange={(value) => setPaymentMethod(value)}
                    >
                      <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                        <RadioGroupItem value='momo' id='momo' />
                        <Label htmlFor='momo' className='flex items-center cursor-pointer flex-1'>
                          <div className='h-8 w-8 bg-[#ae2070] rounded-md flex items-center justify-center mr-3'>
                            <Wallet className='h-5 w-5 text-white' />
                          </div>
                          <span>Thanh toán tiền mặt</span>
                        </Label>
                        <Badge variant='outline' className='ml-auto'>
                          Khuyến mãi 5%
                        </Badge>
                      </div>

                      <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                        <RadioGroupItem value='qr' id='qr' />
                        <Label htmlFor='qr' className='flex items-center cursor-pointer flex-1'>
                          <div className='h-8 w-8 bg-[#1a1a1a] rounded-md flex items-center justify-center mr-3'>
                            <QrCode className='h-5 w-5 text-white' />
                          </div>
                          <span>Quét mã QR</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CheckoutSection>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className='space-y-4'>
            {/* Restaurant Info */}
            <Card className='gap-0'>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle>Tấm Tắc Láng Đại học</CardTitle>
                {/* <Button variant='ghost' size='icon'>
                  <Edit className='h-4 w-4' />
                </Button> */}
              </CardHeader>
              <CardContent>
                <div className='flex items-start text-sm text-muted-foreground'>
                  <MapPin className='h-4 w-4 mr-2 mt-0.5 flex-shrink-0' />
                  <span>Nhà văn hóa sinh viên, khu đô thị Đại học Quốc gia TP. Hồ Chí Minh</span>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className='p-4 '>
              <CardContent className='p-0'>
                <div className='divide-y'>
                  {cartItems.map((item) => (
                    <div key={item.productId} className='p-2 border-foreground/20'>
                      <div className='flex justify-between items-start'>
                        <div className='flex-1'>
                          <h4 className='font-medium'>{item.productName}</h4>
                          <p className='text-sm text-muted-foreground'>
                            {item.note && item.note.length > 0 ? (
                              <>
                                <span className='font-medium'>Ghi chú:</span> {item.note}
                              </>
                            ) : (
                              'Không có ghi chú'
                            )}
                          </p>
                        </div>
                        <div className='text-right'>
                          <div className='text-primary font-medium'>{item.productPrice.toLocaleString()}đ</div>x{' '}
                          {item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardContent className='p-4 py-0 space-y-3'>
                {/* <div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Giá gốc</span>
                  <span>{subtotal.toLocaleString()}đ</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Giảm giá trên món</span>
                  <span>- {discount1.toLocaleString()}đ</span>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Giảm từ mã khuyến mãi - 5%</span>
                  <span>- {discount2.toLocaleString()}đ</span>
                </div>
                {deliveryMethod === 'delivery' && (
                  <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Phí giao hàng</span>
                    <span>{deliveryFee.toLocaleString()}đ</span>
                  </div>
                )}
                <Separator /></div> */}
                <div className='flex justify-between font-medium'>
                  <span>TỔNG CỘNG</span>
                  <span className='text-xl text-primary font-bold'>{total.toLocaleString()}đ</span>
                </div>
              </CardContent>
              <CardFooter className='px-4 py-0'>
                <Button className='w-full h-12 bg-[#4CAF50] hover:bg-[#43A047] text-white rounded-lg font-medium'>
                  Đặt hàng
                </Button>
              </CardFooter>
            </Card>

            {/* Security Note */}
            <div className='flex items-center justify-center text-sm text-muted-foreground'>
              <ShieldCheck className='h-4 w-4 mr-2' />
              <span>Thanh toán an toàn & bảo mật</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
