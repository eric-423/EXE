import { OrderProduct } from './product.type';

export interface Order {
  customerId: number;
  promotionCode: string;
  note: string;
  address: string;
  phoneNumber: string;
  branchId: number;
  pointUsed: number;
  pointEarned: number;
  paymentMethodId: number;
  longitude: string;
  latitude: string;
  orderItems: OrderProduct[];
  pickUp: boolean;
}

export const initialOrder: Order = {
  customerId: 0,
  promotionCode: '',
  note: '',
  address: '',
  phoneNumber: '',
  branchId: 0,
  pointUsed: 0,
  pointEarned: 0,
  paymentMethodId: 0,
  longitude: '',
  latitude: '',
  orderItems: [],
  pickUp: true,
};
