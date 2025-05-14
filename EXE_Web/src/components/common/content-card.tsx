import { Content } from '@/types/content.type';

import { Card } from '../ui/card';

type ContentCardProps = {
  item: Content;
  className?: string;
};

const ContentCard = ({ item }: ContentCardProps) => {
  return (
    <Card className='group relative bg-white rounded-2xl p-1 shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1'>
      <div className='absolute top-0 left-0 w-full h-48 overflow-hidden'>
        <img
          src={item.img || '/placeholder.svg'}
          alt={item.title}
          width={400}
          height={300}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-transparent' />
      </div>

      <div className='pt-52 p-6'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h3 className='text-lg font-bold text-gray-900'>{item.title}</h3>
            <p className='text-sm text-primary'>{item.subtitle}</p>
          </div>
          <div className='p-3 rounded-full bg-background'>{item.icon}</div>
        </div>
        <p className='text-gray-600'>{item.description}</p>
      </div>
    </Card>
  );
};

export default ContentCard;
