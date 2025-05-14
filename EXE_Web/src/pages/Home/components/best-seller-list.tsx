import image from '@/assets/images/Home - Banner.jpg';
import ProductCard from '@/components/common/product-card';
import { Product } from '@/types/product.type';

const productMockData = [
  {
    id: '1',
    title: 'CƠM SƯỜN NƯỚNG MỠM',
    img: `${image}`,
    price: 65000,
    rating: 4.9,
    time: '15-20 phút',
    description: 'Sườn nướng mềm ngọt, thơm nức mũi cùng cơm tấm dẻo thơm.',
  } as Product,
  {
    id: '2',
    title: 'COMBO - SÀI GÒN HƯƠNG',
    img: `${image}`,
    price: 85000,
    rating: 4.8,
    time: '15-20 phút',
    description: 'Cơm tấm sườn bì chả, đồ chua và canh khổ qua hầm xương.',
  } as Product,
  {
    id: '3',
    title: 'COMBO - SÀI GÒN HƯƠNG',
    img: `${image}`,
    price: 85000,
    rating: 4.8,
    time: '15-20 phút',
    description: 'Cơm tấm sườn bì chả, đồ chua và canh khổ qua hầm xương.',
  } as Product,
];

const BestSellerList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {productMockData.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default BestSellerList;
