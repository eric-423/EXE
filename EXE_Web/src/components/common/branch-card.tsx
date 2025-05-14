import { cn } from '@/lib/utils';
import { Branch } from '@/types/branch.type';

import { MapPin, Phone } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '../ui/card';

type BranchCardProps = {
  item: Branch;
  className?: string;
};

const BranchCard = ({ item, className }: BranchCardProps) => {
  return (
    <Card className={cn(className, 'bg-white p-0 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow')}>
      <div className='flex gap-4'>
        <div className='w-24 h-24 rounded-lg overflow-hidden flex-shrink-0'>
          <img
            src={item.img || '/logo-icon.png'}
            alt={item.name}
            width={100}
            height={100}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-grow'>
          <h3 className='font-bold text-lg'>{item.name}</h3>
          <div className='flex items-center mt-2 text-gray-600'>
            <MapPin className='h-4 w-4 mr-2' />
            <span className='text-sm'>{item.address}</span>
          </div>
          <div className='flex items-center mt-1 text-gray-600'>
            <Phone className='h-4 w-4 mr-2' />
            <span className='text-sm'>{item.phone}</span>
          </div>
        </div>
      </div>
      <div className='-mt-10 flex justify-end'>
        <Button variant='outline' size='sm' className='text-primary border-primary hover:bg-primary hover:text-white'>
          Chỉ đường
        </Button>
      </div>
    </Card>
  );
};

export default BranchCard;
