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
        'mt-10 text-2xl text-center text-pallette-green sm:mt-8 sm:text-3xl md:mt-14 font-merriweather-bold md:text-5xl',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default H1;
