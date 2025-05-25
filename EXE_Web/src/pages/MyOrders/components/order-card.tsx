import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { Calendar, ChevronRight, Clock, MapPin, RotateCw } from 'lucide-react';

interface OrderCardProps {
  order: {
    id: string;
    date: string;
    time: string;
    restaurant: string;
    items: number;
    total: number;
    status: string;
    image: string;
    rated?: boolean;
  };
  onViewDetails?: () => void;
}

export function OrderCard({ order, onViewDetails }: OrderCardProps) {
  // const router = useRouter();

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processing':
        return <Badge className='bg-blue-500'>Đang chuẩn bị</Badge>;
      case 'completed':
        return <Badge className='bg-green-500'>Hoàn thành</Badge>;
      case 'cancelled':
        return <Badge className='bg-red-500'>Đã hủy</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className='overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow p-0'>
      <CardContent className='p-0'>
        <div className='flex flex-col md:flex-row mb-0'>
          {/* Order image */}

          {/* Order details */}
          <div className='flex-1 p-4 md:p-6 pb-0 md:pb-0'>
            <div className='flex justify-between items-start'>
              <div>
                <div className='flex items-center text-sm text-muted-foreground mb-2'>
                  <Calendar className='h-4 w-4 mr-1' />
                  <span>{order.date}</span>
                  <Clock className='h-4 w-4 ml-3 mr-1' />
                  <span>{order.time}</span>
                </div>
                <div className='flex items-start mb-3'>
                  <MapPin className='h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary' />
                  <p className='text-sm'>{order.restaurant}</p>
                </div>
                <p className='text-sm font-medium'>
                  {order.total.toLocaleString()}đ ({order.items} món)
                </p>
                <div className='mt-3'>{getStatusBadge(order.status)}</div>
              </div>

              <div className=''>
                <Button variant='ghost' size='icon' className='rounded-full' onClick={onViewDetails}>
                  <ChevronRight className='h-5 w-5' />
                </Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <Separator className='bg-foreground/20 mx-5 ' style={{ width: 'inherit' }} />

      <CardFooter className='p-4 pt-0 pb-6 flex flex-wrap gap-2 justify-end'>
        {order.status === 'cancelled' && (
          <Button
            variant='outline'
            className='text-primary border-primary/20 hover:bg-primary/5'
            size={'sm'}
            // onClick={() => router.push(`/reorder/${order.id}`)}
          >
            <RotateCw className='h-4 w-4 mr-2' />
            Đặt lại
          </Button>
        )}
        {order.status === 'completed' && (
          <Button
            variant='outline'
            className='text-primary border-primary/20 hover:bg-primary/5'
            size={'sm'}
            // onClick={() => router.push(`/reorder/${order.id}`)}
          >
            <RotateCw className='h-4 w-4 mr-2' />
            Đặt lại
          </Button>
        )}
        {order.status === 'processing' && (
          <Button
            variant='outline'
            className='text-primary border-primary/20 hover:bg-primary/5'
            size={'sm'}
            // onClick={() => router.push(`/menu`)}
          >
            <RotateCw className='h-4 w-4 mr-2' />
            Đặt tiếp
          </Button>
        )}
        <Button variant='default' className='bg-primary hover:bg-primary/90' size={'sm'} onClick={onViewDetails}>
          Chi tiết
        </Button>
      </CardFooter>
    </Card>
  );
}
