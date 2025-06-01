import { Order } from '@/types/order.type';
import http from '@/utils/http';

export const GET_CUSTOMER_ORDER_QUERY_KEY = 'GET_CUSTOMER_ORDER_QUERY_KEY';

export const placeOrder = async (order: Order) => {
  const { data } = await http.post('/orders', order);
  return data;
};

export const getCustomerOrders = async (userId: number) => {
  const { data } = await http.get(`/orders/customer/${userId}`);
  return data;
};
