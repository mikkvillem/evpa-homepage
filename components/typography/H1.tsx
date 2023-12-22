import { PropsWithChildren } from '@/lib/types';
import { cn } from '@/lib/utils';
import React from 'react';

type H1Props = {
  className?: string;
};

const H1 = (props: PropsWithChildren<H1Props>) => {
  return (
    <div
      className={cn(
        'mt-10 sm:mt-8 md:mt-14 mb-2',
        'font-merriweather-bold text-center text-pallette-green text-2xl sm:text-3xl md:text-5xl',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default H1;
