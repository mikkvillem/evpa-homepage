'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';
import { login } from '../actions';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

type Props = {};

const initialState: { message: string | null } = { message: null };

const Login = (props: Props) => {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Logi Sisse</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="">
            <Label htmlFor="password">Salasõna</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          {state.message && <p>{state.message}</p>}
        </CardContent>
        <CardFooter>
          <SubmitButton>Logi sisse</SubmitButton>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Login;
