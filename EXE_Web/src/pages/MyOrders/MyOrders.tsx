'use client';

// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ChevronDown, RotateCw } from 'lucide-react';
import { OrderCard } from './components/order-card';
import { useState } from 'react';
import OrderDetailsDialog from './components/order-details-dialog';

const ORDER_STATUS = [
  {
    label: 'Tất cả',
    value: 'all',
  },
  {
    label: 'Đã đặt hàng',
    value: 'processing',
  },
  {
    label: 'Hoàn thành',
    value: 'completed',
  },
  {
    label: 'Đã hủy',
    value: 'cancelled',
  },
];
export default function MyOrders() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  // Mock order history data - in a real app, this would be fetched from an API
  const orders = [
    {
      id: '2502250035',
      date: '09/02/2025',
      time: '14:12',
      restaurant: 'Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh',
      items: 3,
      total: 130000,
      status: 'processing', // processing, completed, cancelled
      image: '/com-suon.jpg',
    },
    {
      id: '2502250034',
      date: '09/02/2025',
      time: '14:12',
      restaurant: 'Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh',
      items: 3,
      total: 130000,
      status: 'completed',
      image: '/com-suon.jpg',
      rated: false,
    },
    {
      id: '2502250033',
      date: '09/02/2025',
      time: '14:12',
      restaurant: 'Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh',
      items: 3,
      total: 130000,
      status: 'cancelled',
      image: '/com-suon.jpg',
    },
    {
      id: '2502250032',
      date: '08/02/2025',
      time: '18:45',
      restaurant: 'Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh',
      items: 2,
      total: 95000,
      status: 'completed',
      image: '/com-suon.jpg',
      rated: true,
    },
    {
      id: '2502250031',
      date: '07/02/2025',
      time: '12:30',
      restaurant: 'Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh',
      items: 4,
      total: 175000,
      status: 'completed',
      image: '/com-suon.jpg',
      rated: true,
    },
  ];

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processing':
        return <Badge className='bg-blue-500'>Đang chuẩn bị</Badge>;
      case 'completed':
        return <Badge className='bg-green-500'>Hoàn thành</Badge>;
      case 'cancelled':
        return <Badge className='bg-red-500'>Đã hủy</Badge>;
      default:
        return null;
    }
  };

  const handleOrderClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    console.log(`Order ${orderId} clicked`); // For debugging
  };

  const handleCloseDialog = () => {
    setSelectedOrderId(null);
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-6'>
      <div className='container mx-auto md:px-30'>
        {/* Page header */}
        <div className='flex flex-col items-center mb-4'>
          <div className='bg-primary/20 px-6 py-2 rounded-full mb-4'>
            <h1 className='text-xl md:text-2xl font-bold text-center'>Lịch sử mua hàng</h1>
          </div>
        </div>

        {/* Orders list */}
        <Tabs defaultValue='all' className='mb-8'>
          <TabsList className='grid grid-cols-4 mb-6'>
            {ORDER_STATUS.map((status) => {
              return (
                <TabsTrigger key={status.value} value={status.value} className='text-sm font-medium'>
                  {status.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {ORDER_STATUS.map((status) =>
            status.value === 'all' ? (
              <TabsContent value={status.value} className='space-y-6'>
                {orders.length > 0 ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {orders.map((order) => (
                      <OrderCard key={order.id} order={order} onViewDetails={() => handleOrderClick(order.id)} />
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-12 bg-white rounded-lg shadow-sm'>
                    <p className='text-muted-foreground'>Không tìm thấy đơn hàng nào</p>
                  </div>
                )}
              </TabsContent>
            ) : (
              <TabsContent value={status.value} className='space-y-6'>
                {orders.filter((order) => order.status === status.value).length > 0 ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {orders
                      .filter((order) => order.status === status.value)
                      .map((order) => (
                        <OrderCard key={order.id} order={order} onViewDetails={() => handleOrderClick(order.id)} />
                      ))}
                  </div>
                ) : (
                  <div className='text-center py-12 bg-white rounded-lg shadow-sm'>
                    <p className='text-muted-foreground'>Không có đơn hàng nào {status.label.toLowerCase()}</p>
                  </div>
                )}
              </TabsContent>
            ),
          )}
        </Tabs>

        {/* Load more button */}
        {orders.length > 0 && (
          <div className='flex justify-center mt-8'>
            <Button variant='outline' className='flex items-center gap-2'>
              <RotateCw className='h-4 w-4' />
              Xem thêm đơn hàng
              <ChevronDown className='h-4 w-4' />
            </Button>
          </div>
        )}

        <OrderDetailsDialog orderId={selectedOrderId} open={!!selectedOrderId} onClose={handleCloseDialog} />
      </div>
    </div>
  );
}
