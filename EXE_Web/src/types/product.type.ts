import { SuccessResponse } from './response.type';

export interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: number;
  rating: number;
  productType: string;
  productQuantity: number;
}

export interface ProductType {
  id: number;
  name: string;
}

export type ProductResponse = SuccessResponse<{
  content: Product[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  last: boolean;
}>;
