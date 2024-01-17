'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { addWorkout } from '../actions';
import SubmitButton from './SubmitButton';
import { Input } from '@/components/ui/input';
import { Tund } from '@/app/(home)/tunniplaan/types';
import { Label } from '@/components/ui/label';
type Props = {
  workoutToEdit?: Tund;
};

const initialState: { message: string | null } = { message: null };

const AddWorkout = ({ workoutToEdit }: Props) => {
  const [state, formAction] = useFormState(addWorkout, initialState);
  return (
    <form
      action={formAction}
      className="space-y-2"
    >
      <div>
        <Label htmlFor="day">Nädalapäev</Label>
        <Input
          type="number"
          name="day"
          id="day"
          min={1}
          max={7}
          defaultValue={workoutToEdit?.day || 1}
          required
        />
      </div>
      <div className="">
        <Label htmlFor="time">Aeg</Label>
        <Input
          type="text"
          name="time"
          id="time"
          placeholder="hh:mm"
          defaultValue={workoutToEdit?.time}
          required
        />
      </div>
      <div className="">
        <Label htmlFor="name">Nimi</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Tunni nimi"
          defaultValue={workoutToEdit?.name}
          required
        />
      </div>
      <div className="">
        <Label
          className="mt-2"
          htmlFor="instructor"
        >
          Juhendaja (valikuline)
        </Label>
        <Input
          type="text"
          name="instructor"
          id="instructor"
          placeholder="Juhendaja nimi"
          defaultValue={workoutToEdit?.instructor || 'Erika'}
          required
        />
      </div>
      <p>{state.message}</p>
      <SubmitButton className="">{workoutToEdit ? 'Uuenda' : 'Lisa'}</SubmitButton>
    </form>
  );
};

export default AddWorkout;
