'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

import { AlertCircle, Calendar, CheckCircle2, Clock, MapPin, Phone, Receipt, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

interface OrderDetailsDrawerProps {
  orderId: string | null;
  open: boolean;
  onClose: () => void;
}

function OrderDetailsDrawer({ orderId, open, onClose }: OrderDetailsDrawerProps) {
  const [cancelDrawerOpen, setCancelDrawerOpen] = useState(false);
  console.log('OrderDetailsDrawer rendered with orderId:', orderId);

  // Mock function to get order details - in a real app, this would fetch from an API
  const getOrderDetails = (id: string) => {
    // Mock order data - in a real app, this would be fetched from an API
    return {
      id: id,
      customerName: 'Lê Minh Duy',
      customerPhone: '0999888777',
      orderStatus: id === '2502250035' ? 'processing' : id === '2502250033' ? 'cancelled' : 'completed',
      paymentStatus: 'paid', // paid, pending
      orderDate: '13:46, 25/01/2025',
      deliveryDate: '12:30, 26/01/2025',
      restaurant: {
        name: 'Tấm Tắc Láng Đại Học',
        phone: '0902857455',
      },
      items: [
        {
          id: 1,
          name: 'COMBO - SÀ BÌ CHƯỞNG',
          price: 134000,
          quantity: 1,
          notes: 'Canh chua, nước ngọt: Coca Cola, cơm thêm',
        },
        {
          id: 2,
          name: 'COMBO - SÀ BÌ CHƯỞNG',
          price: 138000,
          quantity: 1,
          notes: 'Canh chua, nước ngọt: Coca Cola, cơm thêm, rau chua thêm',
        },
        {
          id: 3,
          name: 'CƠM SƯỜN CỘNG',
          price: 85000,
          quantity: 2,
          notes: 'Canh chua\nGhi chú: Lấy ít cơm',
        },
        {
          id: 4,
          name: 'Chả Trứng Hấp',
          price: 12000,
          quantity: 1,
          notes: '',
        },
        {
          id: 5,
          name: 'Coca Cola',
          price: 12000,
          quantity: 4,
          notes: '',
        },
      ],
      subtotal: 442400,
      discount: 86250,
      deliveryFee: 16000,
      total: 372150,
    };
  };

  const order = orderId ? getOrderDetails(orderId) : null;

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className='bg-yellow-500'>Chờ xác nhận</Badge>;
      case 'processing':
        return <Badge className='bg-blue-500'>Đang xử lý</Badge>;
      case 'completed':
        return <Badge className='bg-green-500'>Đã hoàn thành</Badge>;
      case 'cancelled':
        return <Badge className='bg-red-500'>Đã hủy</Badge>;
      default:
        return null;
    }
  };

  // Get payment status badge
  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className='bg-green-500'>Đã thanh toán</Badge>;
      case 'pending':
        return <Badge className='bg-yellow-500'>Chưa thanh toán</Badge>;
      default:
        return null;
    }
  };

  // Handle cancel order
  const handleCancelOrder = () => {
    alert('Đơn hàng đã được hủy thành công');
    setCancelDrawerOpen(false);
    onClose();
  };

  if (!order) return null;

  return (
    <>
      <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
        <DrawerContent data-vaul-custom-container='true' className='max-w-4xl p-4 max-h-[90vh] overflow-y-auto'>
          <DrawerHeader>
            <div className='flex items-center justify-between'>
              <DrawerTitle className='text-2xl font-bold'>Chi tiết đơn hàng</DrawerTitle>
              <div className='flex items-center gap-2'>
                {getStatusBadge(order.orderStatus)}
                {getPaymentStatusBadge(order.paymentStatus)}
              </div>
            </div>
          </DrawerHeader>

          <div className='space-y-6'>
            {/* Order information */}
            <Card className='border-none shadow-none bg-transparent p-0'>
              <CardContent className='p-4 py-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                  <div className='space-y-3'>
                    <div className='flex items-start'>
                      <User className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Tên khách hàng</p>
                        <p className='font-medium text-sm'>{order.customerName}</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <Phone className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Số điện thoại</p>
                        <p className='font-medium text-sm'>{order.customerPhone}</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <Receipt className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Mã đơn hàng</p>
                        <p className='font-medium text-sm'>{order.id}</p>
                      </div>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div className='flex items-start'>
                      <Calendar className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Thời gian đặt hàng</p>
                        <p className='font-medium text-sm'>{order.orderDate}</p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <MapPin className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Cửa hàng</p>
                        <p className='font-medium text-sm'>
                          {order.restaurant.name} - {order.restaurant.phone}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-start'>
                      <Clock className='h-4 w-4 mr-2 text-primary mt-0.5' />
                      <div>
                        <p className='text-xs text-muted-foreground'>Thời gian nhận hàng</p>
                        <p className='font-medium text-sm'>{order.deliveryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order items */}
            <Card className='border-none shadow-sm gap-0'>
              <CardHeader className='pb-0 m-0'>
                <CardTitle className='text-lg flex items-center'>
                  <ShoppingBag className='h-5 w-5 mr-2 text-primary' />
                  Thông tin đơn hàng
                </CardTitle>
              </CardHeader>
              <CardContent className='px-1'>
                <div className='divide-y max-h-60 overflow-y-auto'>
                  {order.items.map((item) => (
                    <div key={item.id} className='py-4 px-5 border-foreground/20 '>
                      <div className='flex justify-between items-start'>
                        <div className='flex-1'>
                          <h4 className='font-medium text-sm'>{item.name}</h4>
                          {item.notes && (
                            <p className='text-xs text-muted-foreground mt-1 whitespace-pre-line'>{item.notes}</p>
                          )}
                        </div>
                        <div className='text-right'>
                          <div className='text-primary font-medium text-sm'>{formatPrice(item.price)}</div>
                          <div className='text-xs text-muted-foreground mt-1'>x {item.quantity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order summary */}
            <Card className='border-none shadow-none bg-transparent px-5 py-0'>
              <CardHeader className='p-0'>
                <div className='flex justify-between font-medium'>
                  <CardTitle className='text-lg flex items-center'>
                    <Receipt className='h-5 w-5 mr-2 text-primary' />
                    Tổng thanh toán
                  </CardTitle>
                  <span className='text-lg text-primary font-bold'>{formatPrice(order.total)}</span>
                </div>
              </CardHeader>
            </Card>

            {/* Order status message */}
            {order.orderStatus === 'completed' && (
              <div className='flex items-center justify-center p-3 bg-green-50 rounded-lg border border-green-200'>
                <CheckCircle2 className='h-4 w-4 mr-2 text-green-500' />
                <span className='text-green-700 text-sm'>
                  Đơn hàng đã được giao thành công. Cảm ơn bạn đã sử dụng dịch vụ của Tấm Tắc!
                </span>
              </div>
            )}
          </div>

          <DrawerFooter className='flex flex-col sm:flex-row gap-3 '>
            {order.orderStatus === 'processing' && (
              <Drawer open={cancelDrawerOpen} onOpenChange={setCancelDrawerOpen}>
                <Button variant='outline' className='w-full sm:w-auto' onClick={() => setCancelDrawerOpen(true)}>
                  Hủy đơn
                </Button>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className='flex items-center'>
                      <AlertCircle className='h-5 w-5 mr-2 text-red-500' />
                      Xác nhận hủy đơn hàng
                    </DrawerTitle>
                    <DrawerDescription>
                      Bạn có chắc chắn muốn hủy đơn hàng này? Hành động này không thể hoàn tác.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button variant='outline' onClick={() => setCancelDrawerOpen(false)}>
                      Không, giữ đơn hàng
                    </Button>
                    <Button variant='destructive' onClick={handleCancelOrder}>
                      Có, hủy đơn hàng
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
            <Button className='w-full sm:w-auto bg-[#4CAF50] hover:bg-[#43A047] text-white' onClick={onClose}>
              Tiếp tục đặt hàng
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default OrderDetailsDrawer;
