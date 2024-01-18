'use client';

import { Tund } from '@/app/(home)/tunniplaan/types';
import React from 'react';
import { useFormState } from 'react-dom';
import { deleteWorkout } from '../actions';
import SubmitButton from './SubmitButton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { dayName } from '@/lib/utils';
type Props = Pick<Tund, 'day' | 'time' | 'name'>;
const initialState: { message: string | null } = { message: null };

const DeleteForm = ({ day, time }: Props) => {
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
      <SubmitButton>Kustuta</SubmitButton>
      <p>{state.message}</p>
    </form>
  );
};

const DeleteWorkout = ({ day, time, name }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="p-2 rounded-md border-pallette-green border-2 hover:bg-pallette-yellow text-pallette-green font-bold">
        Kustuta
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Kas oled kindel?</AlertDialogTitle>
          <AlertDialogDescription>
            Kinnitades kustutad tunniplaanist valitud tunni:
            <p className="font-semibold">{`${dayName[day - 1]} - ${time} - ${name}`}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Katkesta</AlertDialogCancel>
          <AlertDialogAction asChild>
            <DeleteForm {...{ day, time, name }} />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkout;
