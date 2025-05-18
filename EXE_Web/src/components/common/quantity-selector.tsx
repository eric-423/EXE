import { Minus, Plus } from 'lucide-react';

import { Button } from '../ui/button';

interface QuantitySelectorProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  small?: boolean;
}

export function QuantitySelector({ value, onDecrease, onIncrease, small = false }: QuantitySelectorProps) {
  return (
    <div className={`flex items-center ${small ? 'gap-1' : 'gap-2'}`}>
      <Button
        variant='outline'
        size={small ? 'sm' : 'icon'}
        onClick={onDecrease}
        disabled={value <= 0}
        className={`rounded-full border-gray-300 ${small ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <Minus className={small ? 'h-3 w-3' : 'h-4 w-4'} />
      </Button>
      <span className={`font-medium ${small ? 'w-5' : 'w-6'} text-center`}>{value}</span>
      <Button
        variant='outline'
        size={small ? 'sm' : 'icon'}
        onClick={onIncrease}
        className={`rounded-full border-gray-300 ${small ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <Plus className={small ? 'h-3 w-3' : 'h-4 w-4'} />
      </Button>
    </div>
  );
}
