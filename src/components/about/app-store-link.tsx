import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Apple } from 'lucide-react';

interface Props {
  url: string;
}

export const AppStoreLink = ({ url }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Button className='gap-2' variant='outline'>
        <Apple className='size-4' />
        Link to App Store
      </Button>
    </Link>
  );
};
