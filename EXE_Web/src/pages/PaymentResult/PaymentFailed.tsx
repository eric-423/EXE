import { removeCookie } from '@/utils/cookies';

import { useEffect } from 'react';

import { PaymentResultContent } from './PaymentResult';

export default function PaymentFailed() {
  useEffect(() => {
    return () => {
      removeCookie('is_paying');
    };
  });
  return <PaymentResultContent isSuccess={false} />;
}
