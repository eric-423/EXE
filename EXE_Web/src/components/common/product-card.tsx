import { Product } from '@/types/product.type';

import { Clock, Star } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '../ui/card';

type ProductCardProps = {
  item: Product;
};

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Card className='group p-0 overflow-hidden bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300'>
      <div className='relative h-64 overflow-hidden'>
        <img
          src={item.img || '/placeholder.svg'}
          alt={item.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-md'>
          <Star className='h-4 w-4 text-yellow-500 mr-1' fill='#F59E0B' />
          <span className='text-sm font-medium'>{item.rating}</span>
        </div>
      </div>

      <div className='p-6 pt-0'>
        <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
        <p className='text-gray-600 mb-4'>{item.description}</p>

        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center text-gray-500'>
            <Clock className='h-4 w-4 mr-1' />
            <span className='text-sm'>{item.time}</span>
          </div>
          <span className='text-xl font-bold text-primary'>{item.price.toLocaleString()} đ</span>
        </div>

        <Button className='w-full bg-primary hover:bg-[#C04A00] text-white'>Thêm vào giỏ</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
