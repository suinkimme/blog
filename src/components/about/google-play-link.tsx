import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface Props {
  url: string;
}

export const GooglePlayLink = ({ url }: Props) => {
  return (
    <Link href={url} target='_blank'>
      <Button className='gap-2' variant='outline'>
        <Play className='size-4' />
        Link to Google Play
      </Button>
    </Link>
  );
};
