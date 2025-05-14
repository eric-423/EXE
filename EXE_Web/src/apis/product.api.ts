import { ProductType } from '@/types/product.type';
import http from '@/utils/http';

export const GET_PRODUCT_TYPE_QUERY_KEY = 'GET_PRODUCT_TYPE_QUERY_KEY';
export const GET_PRODUCT_TYPE_STALE_TIME = 1000 * 60 * 30;

export const getProductType = async () => {
  const { data } = await http.get('/product-type');
  return [{ id: 0, name: 'Tất cả' }, ...data] as ProductType[];
};
