'use client';

import { OrderDetailsDialog, OrderDetailsDrawer } from '@/components/common/order-details';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useIsMobile } from '@/hooks/use-mobile';
import { useGetCustomerOrders } from '@/hooks/useGetCustomerOrders';
import { OrderResponse } from '@/types/order.type';
import { OrderStatus } from '@/utils/enum';

import { useState } from 'react';

import { OrderCard } from './components/order-card';

const ORDER_STATUS = [
  {
    label: 'Tất cả',
    value: 'all',
  },
  {
    label: 'Đã đặt hàng',
    value: OrderStatus.PROCESSING,
  },
  {
    label: 'Hoàn thành',
    value: OrderStatus.COMPLETED,
  },
  {
    label: 'Đã hủy',
    value: OrderStatus.CANCELLED,
  },
];
export default function MyOrders() {
  const [selectedOrder, setSelectedOrder] = useState<OrderResponse | null>(null);
  const isMobile = useIsMobile();

  const { orders, isLoadingOrders } = useGetCustomerOrders();

  const handleOrderClick = (order: OrderResponse) => {
    setSelectedOrder(order); // For debugging
  };

  const handleCloseDialog = () => {
    setSelectedOrder(null);
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-6'>
      {isLoadingOrders ? (
        <div className='flex items-center justify-center min-h-screen'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary'></div>
        </div>
      ) : (
        <div className='container mx-auto lg:px-30'>
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
                        <OrderCard key={order.id} order={order} onViewDetails={() => handleOrderClick(order)} />
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
                  {orders.filter((order) => order.orderStatus === status.value).length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                      {orders
                        .filter((order) => order.orderStatus === status.value)
                        .map((order) => (
                          <OrderCard key={order.id} order={order} onViewDetails={() => handleOrderClick(order)} />
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

          {selectedOrder !== null &&
            (isMobile ? (
              <OrderDetailsDrawer order={selectedOrder} open={!!selectedOrder} onClose={handleCloseDialog} />
            ) : (
              <OrderDetailsDialog order={selectedOrder} open={!!selectedOrder} onClose={handleCloseDialog} />
            ))}
        </div>
      )}
    </div>
  );
}
