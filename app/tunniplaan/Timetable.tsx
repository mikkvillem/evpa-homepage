import React from 'react';
import PilatesLogoTransparent from '../../public/pilates_logo_transparent.png';
import { cn, dayName, addMinutesToTimeString } from '@/lib/utils';
import type { PropsWithOptionalChildren } from '@/lib/types';
import type { Tund } from './types';
import Image from 'next/image';

type TimetableProps = {
  className?: string;
  workouts: Tund[];
};

const TableCell = ({
  heading = false,
  className,
  children,
}: PropsWithOptionalChildren<{ heading?: boolean; className?: string }>) => {
  return (
    <div
      className={cn(
        'col-span-1 row-span-1 flex items-center justify-center rounded-md border-2 p-2 border-pallette-green',
        !children
          ? 'bg-transparent'
          : heading
          ? 'bg-pallette-yellow text-pallette-green font-montserrat font-bold'
          : 'bg-pallette-green text-xs text-white font-montserrat text-center',
        className
      )}
    >
      {children}
    </div>
  );
};

const Timetable = ({ className, workouts }: TimetableProps) => {
  const daysWithWorkouts: number[] = Array.from(
    new Set(workouts.map((workout) => workout.day))
  ).sort();

  const timeslots: string[] = Array.from(new Set(workouts.map((workout) => workout.time))).sort();

  const dayTimeWorkoutMap: Record<string, Tund> = workouts.reduce((map, workout) => {
    const id = workout.day + '_' + workout.time;
    return { ...map, [id]: workout };
  }, {});

  const workoutsByDay: Record<number, Tund[]> = workouts.reduce((acc, workout) => {
    acc[workout.day] = acc[workout.day] || [];
    acc[workout.day].push(workout);
    return acc;
  }, Object.create(null));

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden w-full -mt-4">
        {Object.entries(workoutsByDay).map(([day, workouts]) => {
          return (
            <div
              key={dayName[Number(day) - 1]}
              id={dayName[Number(day) - 1]}
              className="mt-4 flex flex-col gap-2 w-full"
            >
              <div className="w-full mb-2 font-semibold py-1 border-2 border-pallette-green text-center font-montserrat bg-pallette-yellow text-pallette-green text-base">
                {dayName[Number(day) - 1]}
              </div>
              {workouts.map(({ day, time, name, duration }) => {
                return (
                  <div
                    key={`${day}_${time}`}
                    className="w-full px-2 py-3 border-2 border-pallette-green text-left font-montserrat text-white bg-pallette-green"
                  >
                    <p className="text-xs">
                      Kell {time} - {addMinutesToTimeString(time, duration)}
                    </p>
                    <h4 className="font-semibold text-base">{name}</h4>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Desktop */}
      <div
        style={{
          gridTemplateColumns: `repeat(${daysWithWorkouts.length + 1}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${timeslots.length + 1}, minmax(0, 1fr))`,
        }}
        className={cn(
          'hidden md:grid p-1 gap-1 border-2 bg-pallette-beige border-pallette-green rounded-md grid-cols-1',
          className
        )}
      >
        <TableCell
          heading
          className="bg-white"
        >
          <Image
            src={PilatesLogoTransparent}
            alt="Erika Viira Pilatese Akadeemia logo"
          />
        </TableCell>
        {daysWithWorkouts.map((day) => (
          <TableCell
            heading
            key={dayName[day - 1]}
          >
            {dayName[day - 1][0]}
          </TableCell>
        ))}
        {timeslots.map((time) => (
          <React.Fragment key={time}>
            <TableCell heading>{time}</TableCell>
            {daysWithWorkouts.map((day) => {
              const id = day + '_' + time;
              return dayTimeWorkoutMap[id] ? (
                <TableCell key={id}>{dayTimeWorkoutMap[id].name}</TableCell>
              ) : (
                <TableCell key={id} />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Timetable;
