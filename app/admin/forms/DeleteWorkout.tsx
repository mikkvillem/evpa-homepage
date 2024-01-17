'use client';

import { Tund } from '@/app/(home)/tunniplaan/types';
import React from 'react';
import { useFormState } from 'react-dom';
import { deleteWorkout } from '../actions';
import SubmitButton from './SubmitButton';

type Props = Pick<Tund, 'day' | 'time'>;
const initialState: { message: string | null } = { message: null };

const DeleteWorkout = ({ day, time }: Props) => {
  const [state, formAction] = useFormState(deleteWorkout, initialState);
  return (
    <form action={formAction}>
      <input
        type="hidden"
        id="day"
        name="day"
        defaultValue={day}
      />
      <input
        type="hidden"
        id="time"
        name="time"
        defaultValue={time}
      />
      <SubmitButton>X</SubmitButton>
      <p>{state.message}</p>
    </form>
  );
};

export default DeleteWorkout;
