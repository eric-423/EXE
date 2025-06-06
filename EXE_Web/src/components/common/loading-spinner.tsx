import React from 'react';
import { twMerge } from 'tailwind-merge';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className='flex items-center justify-center'>
      <div
        className={twMerge(
          'animate-spin rounded-full border-2 border-background border-t-primary',
          sizeClasses[size],
          className,
        )}
      />
    </div>
  );
};
