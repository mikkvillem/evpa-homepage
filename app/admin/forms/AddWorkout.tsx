'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { addWorkout } from '../actions';
import SubmitButton from './SubmitButton';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tund } from '@/app/(home)/tunniplaan/types';
import { Label } from '@/components/ui/label';
import { dayName } from '@/lib/utils';
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
        <Select
          required
          name="day"
        >
          <SelectTrigger>
            <SelectValue
              placeholder={workoutToEdit?.day ? dayName[workoutToEdit.day - 1] : 'Vali siit'}
              defaultValue={workoutToEdit?.day}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {dayName.map((name, index) => (
                <SelectItem
                  key={name}
                  value={`${index + 1}`}
                >
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
