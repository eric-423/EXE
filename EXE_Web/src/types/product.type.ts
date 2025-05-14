import { SuccessResponse } from './response.type';

export interface Product {
  id: string;
  title: string;
  description: string;
  img?: string;
  price: number;
  rating: number;
  time: string;
}

export type ProductResponse = SuccessResponse<{
  products: Product[];
  total: number;
}>;
