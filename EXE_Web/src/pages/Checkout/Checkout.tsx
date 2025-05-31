'use client';

import ControlledDateTimePicker from '@/components/common/controlled-date-time-picker';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/cart/CartContext';
import { useAuth } from '@/hooks';
import { cn } from '@/lib/utils';
import { initialOrder, Order } from '@/types/order.type';
import { getReceiveTime } from '@/utils/getReceiveTime';
import { STORE_INFO } from '@/utils/mockupData';

import { Clock, CreditCard, MapPin, QrCode, ShieldCheck, User, Wallet } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import CheckoutSection from './components/checkout-section';
import { CheckoutFormData, checkoutSchema } from './schema';

import { zodResolver } from '@hookform/resolvers/zod';

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCart();
  const { user } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      customerName: '',
      customerPhone: user?.phoneNumber || '',
      customerEmail: '',
      receiveTime: z.date().safeParse(getReceiveTime()).success ? getReceiveTime() : new Date(),
      paymentMethod: 'qr',
    },
  });

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue('receiveTime', date);
    }
  }

  function handleTimeChange(type: 'hour' | 'minute', value: string) {
    const currentDate = form.getValues('receiveTime') || new Date();
    const newDate = new Date(currentDate);

    if (type === 'hour') {
      const hour = parseInt(value, 10);
      newDate.setHours(hour);
    } else if (type === 'minute') {
      newDate.setMinutes(parseInt(value, 10));
    }

    form.setValue('receiveTime', newDate);
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    try {
      const orderData: Order = {
        ...initialOrder,
        customerId: user?.id || 0,
        phoneNumber: data.customerPhone,
        paymentMethodId: 2,
        orderItems: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          note: item.note || '',
        })),
      };

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log('Order submitted:', orderData);

      toast.success('Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ liên hệ với bạn sớm nhất.');

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Order submission error:', error);
      toast.error('Không thể đặt hàng. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='flex flex-col items-center justify-center space-y-4'>
            <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-primary'></div>
          </div>
        </div>
      )}
      <div className={cn('min-h-screen py-8 px-4 md:px-30', isSubmitting && 'opacity-50 pointer-events-none')}>
        <div className='container mx-auto max-w-6xl'>
          <h1 className='text-3xl font-bold text-center mb-8'>Xác nhận đơn hàng</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
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
                        <FormField
                          control={form.control}
                          name='customerName'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel htmlFor='customerName'>Tên khách hàng</FormLabel>
                              <Input id='customerName' placeholder='Nhập tên của bạn' {...field} />
                            </FormItem>
                          )}
                        ></FormField>
                        <FormField
                          control={form.control}
                          name='customerPhone'
                          render={({ field }) => (
                            <FormItem className='space-y-2'>
                              <FormLabel htmlFor='customerPhone'>Số điện thoại</FormLabel>
                              <Input id='customerPhone' placeholder='Nhập số điện thoại' {...field} />
                            </FormItem>
                          )}
                        ></FormField>
                      </div>
                      <FormField
                        control={form.control}
                        name='customerEmail'
                        render={({ field }) => (
                          <FormItem className='space-y-2'>
                            <FormLabel htmlFor='customerEmail'>Email</FormLabel>
                            <Input
                              id='customerEmail'
                              type='email'
                              placeholder='Nhập email (không bắt buộc)'
                              {...field}
                            />
                          </FormItem>
                        )}
                      ></FormField>
                      <Separator className='my-8 bg-foreground/20' />
                    </CheckoutSection>

                    <CheckoutSection
                      title='Thời gian nhận hàng'
                      className='mb-4'
                      icon={<Clock className='h-5 w-5 text-primary' />}
                    >
                      <FormField
                        control={form.control}
                        name='receiveTime'
                        render={({ field }) => (
                          <FormItem className='flex flex-col'>
                            <div className='flex items-center px-4'>
                              <FormLabel htmlFor='scheduled' className=' mr-2'>
                                Hẹn lịch nhận lúc
                              </FormLabel>
                              <div className='flex'>
                                <ControlledDateTimePicker
                                  field={field.value}
                                  handleDateSelect={handleDateSelect}
                                  handleTimeChange={handleTimeChange}
                                />
                              </div>
                            </div>
                            <div className='flex items-start text-sm text-medium ml-3 mt-2'>
                              <MapPin className='h-4 w-4 mr-2 mt-0.5 flex-shrink-0' />
                              <span className='font-medium'>
                                {STORE_INFO.name}
                                <p className='font-normal'>{STORE_INFO.address}</p>
                              </span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <Separator className='my-8 bg-foreground/20' />
                    </CheckoutSection>

                    <CheckoutSection
                      title='Phương thức thanh toán'
                      className='mb-4'
                      icon={<CreditCard className='h-5 w-5 text-primary' />}
                    >
                      <FormField
                        control={form.control}
                        name='paymentMethod'
                        render={({ field }) => (
                          <FormItem className='space-y-3'>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className='space-y-2'
                              >
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
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </CheckoutSection>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Order Summary */}
              <div className='space-y-4'>
                {/* Restaurant Info */}

                {/* Order Items */}
                <Card className='p-4 gap-2'>
                  <CardTitle className='m-2 mb-0'>Thông tin đơn hàng</CardTitle>
                  <CardContent className='p-0'>
                    <div className='divide-y'>
                      {items.map((item) => (
                        <div key={item.productId} className='p-2 border-foreground/20'>
                          <div className='flex justify-between items-start'>
                            <div className='flex-1'>
                              <h5 className='font-medium text-sm'>{item.productName}</h5>
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
                            <div className='text-right text-sm'>
                              <div className='text-primary font-medium'>{item.productPrice.toLocaleString()}đ</div>x{' '}
                              {item.quantity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className='p-4 gap-2'>
                  <CardTitle className='m-2 mb-0'>Ghi chú cho đơn hàng</CardTitle>
                  <CardContent className='p-0'>
                    <FormField
                      control={form.control}
                      name='note'
                      render={({ field }) => (
                        <FormItem className='mt-1'>
                          <Textarea
                            id='note'
                            placeholder='Nhập ghi chú của bạn ở đây...'
                            {...field}
                            className='w-full resize-none h-20'
                          />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card>
                  <CardContent className='p-4 py-0 space-y-3'>
                    <div className='flex justify-between font-medium'>
                      <span>TỔNG CỘNG</span>
                      <span className='text-xl text-primary font-bold'>{getTotalPrice().toLocaleString()}đ</span>
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
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
