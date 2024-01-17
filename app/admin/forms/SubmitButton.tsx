'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

const SubmitButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  const { children, ...restProps } = props;
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
