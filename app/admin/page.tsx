import React from 'react';
import { supabaseClient } from '@/lib/db/client';
import AddWorkout from './forms/AddWorkout';
import { Tund } from '../(home)/tunniplaan/types';
import { dayName } from '@/lib/utils';
import DeleteWorkout from './forms/DeleteWorkout';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from '@/components/ui/table';

type Props = {};

const AdminPage = async (props: Props) => {
  const { data: workouts } = await supabaseClient
    .from('workouts')
    .select('*')
    .order('day', { ascending: true })
    .order('time', { ascending: true });
  return (
    <div className="w-full">
      <AddWorkout />

      <h2 className="text-center text-2xl font-merriweather-bold mb-4 mt-12">
        Olemasolev tunniplaan
      </h2>
      <Table className="mt-4">
        <TableHeader className="font-merriweather-bold uppercase">
          <TableRow>
            <TableHead>Nädalapäev</TableHead>

            <TableHead>Kellaaeg</TableHead>

            <TableHead>Tunni nimi</TableHead>

            <TableHead>Juhendaja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workouts?.map(({ day, name, time, instructor }: Tund) => {
            return (
              <TableRow key={`${day}_${time}`}>
                <TableCell>{dayName[day - 1]}</TableCell>
                <TableCell>{time}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{instructor}</TableCell>
                <TableCell className="text-right">
                  <DeleteWorkout
                    day={day}
                    time={time}
                    name={name}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPage;
