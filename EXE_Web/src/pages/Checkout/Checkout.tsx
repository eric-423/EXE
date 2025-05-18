'use client';

import { QuantitySelector } from '@/components/common/quantity-selector';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { MOCKUP_CART_ITEMS } from '@/utils/mockupData';

import {
  Clock,
  CreditCard,
  DollarSign,
  Edit,
  MapPin,
  Minus,
  Plus,
  QrCode,
  ShieldCheck,
  Store,
  Truck,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
  const cartItems = MOCKUP_CART_ITEMS;
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [deliveryTime, setDeliveryTime] = useState('now');
  const [sameAsCustomer, setSameAsCustomer] = useState(true);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  const discount1 = 23000; // Discount for items
  const discount2 = Math.round(subtotal * 0.05); // 5% promo discount
  const deliveryFee = 15000;
  const total = subtotal - discount1 - discount2 + (deliveryMethod === 'delivery' ? deliveryFee : 0);

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  return (
    <div className='min-h-screen bg-[#FFF8F0] py-8 px-4 md:px-0'>
      <div className='container mx-auto max-w-6xl'>
        <h1 className='text-3xl font-bold text-center mb-8'>Xác nhận đơn hàng</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Customer Information */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Delivery Method */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl flex items-center'>
                  <span className='bg-primary/10 p-2 rounded-full mr-3'>
                    <Truck className='h-5 w-5 text-primary' />
                  </span>
                  Hình thức
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue='delivery' className='flex space-x-4' onValueChange={setDeliveryMethod}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='delivery' id='delivery' />
                    <Label htmlFor='delivery' className='flex items-center cursor-pointer'>
                      <Truck className='h-4 w-4 mr-2' />
                      Giao hàng
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='pickup' id='pickup' />
                    <Label htmlFor='pickup' className='flex items-center cursor-pointer'>
                      <Store className='h-4 w-4 mr-2' />
                      Đúng tại quán
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl'>Thông tin khách hàng</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
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
              </CardContent>
            </Card>

            {/* Delivery Information - Only show if delivery is selected */}
            {deliveryMethod === 'delivery' && (
              <Card>
                <CardHeader className='flex flex-row items-center justify-between'>
                  <CardTitle className='text-xl'>Thông tin giao hàng</CardTitle>
                  <div className='flex items-center space-x-2'>
                    <Checkbox
                      id='sameAsCustomer'
                      checked={sameAsCustomer}
                      onCheckedChange={(checked) => setSameAsCustomer(checked as boolean)}
                    />
                    <Label htmlFor='sameAsCustomer' className='text-sm'>
                      Đặt hộ
                    </Label>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='recipientName'>Tên người nhận</Label>
                      <Input
                        id='recipientName'
                        placeholder='Nhập tên người nhận'
                        defaultValue={sameAsCustomer ? 'Nguyễn Văn A' : ''}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='recipientPhone'>Số điện thoại người nhận</Label>
                      <Input
                        id='recipientPhone'
                        placeholder='Nhập số điện thoại người nhận'
                        defaultValue={sameAsCustomer ? '0901234567' : ''}
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='province'>Tỉnh/thành</Label>
                      <Select defaultValue='hcm'>
                        <SelectTrigger id='province'>
                          <SelectValue placeholder='Chọn tỉnh/thành' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='hcm'>TP. Hồ Chí Minh</SelectItem>
                          <SelectItem value='hn'>Hà Nội</SelectItem>
                          <SelectItem value='dn'>Đà Nẵng</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='district'>Quận/huyện</Label>
                      <Select defaultValue='q10'>
                        <SelectTrigger id='district'>
                          <SelectValue placeholder='Chọn quận/huyện' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='q1'>Quận 1</SelectItem>
                          <SelectItem value='q10'>Quận 10</SelectItem>
                          <SelectItem value='td'>Thủ Đức</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='ward'>Phường/xã</Label>
                      <Select defaultValue='p12'>
                        <SelectTrigger id='ward'>
                          <SelectValue placeholder='Chọn phường/xã' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='p12'>Phường 12</SelectItem>
                          <SelectItem value='p14'>Phường 14</SelectItem>
                          <SelectItem value='p15'>Phường 15</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='street'>Đường</Label>
                      <Select defaultValue='lythuongkiet'>
                        <SelectTrigger id='street'>
                          <SelectValue placeholder='Chọn đường' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='lythuongkiet'>Lý Thường Kiệt</SelectItem>
                          <SelectItem value='3thang2'>3 Tháng 2</SelectItem>
                          <SelectItem value='cmtt'>Cách Mạng Tháng Tám</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='address'>Địa chỉ chi tiết</Label>
                    <Input id='address' placeholder='Số nhà, tòa nhà, lô, ...' defaultValue='268 Lý Thường Kiệt' />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Delivery Time */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl flex items-center'>
                  <span className='bg-primary/10 p-2 rounded-full mr-3'>
                    <Clock className='h-5 w-5 text-primary' />
                  </span>
                  Thời gian {deliveryMethod === 'delivery' ? 'giao hàng' : 'nhận hàng'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue='now' className='space-y-3' onValueChange={setDeliveryTime}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='now' id='now' />
                    <Label htmlFor='now' className='flex items-center cursor-pointer'>
                      <Clock className='h-4 w-4 mr-2' />
                      {deliveryMethod === 'delivery' ? 'Giao ngay' : 'Đến lấy ngay'}
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='scheduled' id='scheduled' />
                    <Label htmlFor='scheduled' className='cursor-pointer'>
                      Hẹn lịch giao lúc
                    </Label>
                    <div className='flex items-center space-x-2'>
                      <Input
                        type='time'
                        className='w-24'
                        defaultValue='17:45'
                        disabled={deliveryTime !== 'scheduled'}
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
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className='text-xl flex items-center'>
                  <span className='bg-primary/10 p-2 rounded-full mr-3'>
                    <CreditCard className='h-5 w-5 text-primary' />
                  </span>
                  Phương thức thanh toán
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='digital' className='w-full'>
                  <TabsList className='grid grid-cols-2 w-full mb-4'>
                    <TabsTrigger value='digital' className='flex items-center justify-center'>
                      <CreditCard className='h-4 w-4 mr-2' />
                      Thanh toán điện tử
                    </TabsTrigger>
                    <TabsTrigger value='cash' className='flex items-center justify-center'>
                      <DollarSign className='h-4 w-4 mr-2' />
                      Tiền mặt
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value='digital' className='space-y-4'>
                    <RadioGroup
                      defaultValue='momo'
                      className='space-y-3'
                      onValueChange={(value) => setPaymentMethod(value)}
                    >
                      <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                        <RadioGroupItem value='momo' id='momo' />
                        <Label htmlFor='momo' className='flex items-center cursor-pointer flex-1'>
                          <div className='h-8 w-8 bg-[#ae2070] rounded-md flex items-center justify-center mr-3'>
                            <Wallet className='h-5 w-5 text-white' />
                          </div>
                          <span>Ví Momo</span>
                        </Label>
                        <Badge variant='outline' className='ml-auto'>
                          Khuyến mãi 5%
                        </Badge>
                      </div>

                      <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                        <RadioGroupItem value='vnpay' id='vnpay' />
                        <Label htmlFor='vnpay' className='flex items-center cursor-pointer flex-1'>
                          <div className='h-8 w-8 bg-[#0066ff] rounded-md flex items-center justify-center mr-3'>
                            <CreditCard className='h-5 w-5 text-white' />
                          </div>
                          <span>VNPay</span>
                        </Label>
                      </div>

                      <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                        <RadioGroupItem value='qr' id='qr' />
                        <Label htmlFor='qr' className='flex items-center cursor-pointer flex-1'>
                          <div className='h-8 w-8 bg-[#1a1a1a] rounded-md flex items-center justify-center mr-3'>
                            <QrCode className='h-5 w-5 text-white' />
                          </div>
                          <span>Quét mã QR VNPay</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </TabsContent>

                  <TabsContent value='cash'>
                    <div className='flex items-center space-x-3 p-3 rounded-lg border border-gray-200 bg-white'>
                      <RadioGroupItem
                        value='cash'
                        id='cash'
                        checked={paymentMethod === 'cash'}
                        onClick={() => setPaymentMethod('cash')}
                      />
                      <Label htmlFor='cash' className='flex items-center cursor-pointer'>
                        <div className='h-8 w-8 bg-[#4CAF50] rounded-md flex items-center justify-center mr-3'>
                          <DollarSign className='h-5 w-5 text-white' />
                        </div>
                        <span>Tiền mặt (COD)</span>
                      </Label>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className='space-y-6'>
            {/* Restaurant Info */}
            <Card>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle>Tấm Tắc Láng Đại học</CardTitle>
                <Button variant='ghost' size='icon'>
                  <Edit className='h-4 w-4' />
                </Button>
              </CardHeader>
              <CardContent>
                <div className='flex items-start text-sm text-muted-foreground'>
                  <MapPin className='h-4 w-4 mr-2 mt-0.5 flex-shrink-0' />
                  <span>Nhà văn hóa sinh viên, khu đô thị Đại học Quốc gia TP. Hồ Chí Minh</span>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardContent className='p-0'>
                <div className='divide-y'>
                  {cartItems.map((item) => (
                    <div key={item.productId} className='p-4'>
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

            {/* Promo Code & Notes */}
            <Card>
              <CardContent className='p-4 space-y-4'>
                <div className='flex space-x-2'>
                  <Input placeholder='Nhập mã khuyến mãi' />
                  <Button variant='secondary'>Áp dụng</Button>
                </div>

                <div>
                  <Label htmlFor='notes' className='text-sm'>
                    Ghi chú cho cửa hàng
                  </Label>
                  <Textarea
                    id='notes'
                    placeholder='Nhập ghi chú cho đơn hàng của bạn...'
                    className='mt-1.5 resize-none'
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardContent className='p-4 space-y-3'>
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
                <Separator />
                <div className='flex justify-between font-medium'>
                  <span>TỔNG CỘNG</span>
                  <span className='text-xl text-primary font-bold'>{total.toLocaleString()}đ</span>
                </div>
              </CardContent>
              <CardFooter className='px-4 pb-4'>
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
