import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Clock, Heart, ShoppingBag, Star } from 'lucide-react';

const FeaturedProduct = () => {
  return (
    <div className='mb-10'>
      <div className='relative rounded-2xl overflow-hidden shadow-lg'>
        <div className='absolute top-4 left-4 z-10'>
          <Badge className='bg-primary rounded-full text-md px-3'>Signature</Badge>
        </div>
        <div className='grid md:grid-cols-2'>
          <div className='relative h-64 md:h-auto'>
            <img src='/featured-dish.jpg' alt='Cơm Tấm Đặc Biệt' className='object-cover' />
          </div>
          <div className='bg-white p-6 md:p-8'>
            <h2 className='text-2xl font-bold mb-2'>Cơm Tấm Đặc Biệt</h2>
            <div className='flex items-center mb-4'>
              <div className='flex items-center text-yellow-500 mr-4'>
                <Star className='h-4 w-4 fill-yellow-500 mr-1' />
                <span className='font-medium'>4.9</span>
                <span className='text-gray-500 text-sm ml-1'>(120)</span>
              </div>
              <div className='flex items-center text-gray-500 text-sm'>
                <Clock className='h-4 w-4 mr-1' />
                <span>15-20 phút</span>
              </div>
            </div>
            <p className='text-gray-600 mb-6'>
              Món cơm tấm đặc biệt với sườn nướng mềm, bì giòn, chả trứng thơm ngon, trứng ốp la và đồ chua. Phục vụ kèm
              canh tự chọn và nước ngọt.
            </p>
            <div className='flex items-center justify-between mb-6'>
              <div>
                <span className='text-3xl font-bold text-primary'>129.000đ</span>
                <span className='text-gray-500 line-through ml-2'>149.000đ</span>
              </div>
              <Button variant='outline' size='icon' className='rounded-full border-gray-200'>
                <Heart className='h-5 w-5 text-gray-500' />
              </Button>
            </div>
            <Button className='w-full bg-primary hover:bg-[#C04A00] text-white'>
              <ShoppingBag className='h-4 w-4 mr-2' />
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
