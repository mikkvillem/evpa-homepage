'use client';

import React from 'react';
import { Tund } from '../tunniplaan/types';
import { cn, currentDay } from '@/lib/utils';

type TodaysClassesProps = {
  workouts: Tund[];
};

const colorMap = [
  'bg-pallette-pink',
  'bg-pallette-yellow',
  'bg-pallette-yellow',
  'bg-pallette-pink',
];

const TodaysClasses = ({ workouts }: TodaysClassesProps) => {
  const dailyGroupedClasses: Record<number, Tund[]> = workouts.reduce((acc, workout) => {
    acc[workout.day] = acc[workout.day] || [];
    acc[workout.day].push(workout);
    return acc;
  }, Object.create(null));
  const dayToday = currentDay();
  const todaysClasses = dailyGroupedClasses[dayToday];
  return (
    <>
      {!todaysClasses || todaysClasses?.length === 0 ? (
        <p className="mb-4 md:self-start">Täna puhkame, treenime jälle homme.</p>
      ) : (
        <div
          className={cn(
            'w-full grid gap-4 my-4',
            todaysClasses?.length <= 1 ? 'grid-cols-1' : 'grid-cols-2',
            `grid-rows-${Math.round(todaysClasses?.length / 2)}`
          )}
        >
          {todaysClasses?.map(({ day, name, time }, index) => {
            return (
              <div
                key={`${day}_${time}_${name}`}
                className={cn('p-4 text-left space-y-2', colorMap[index])}
              >
                <p className="text-base font-montserrat sm:text-lg md:text-xl">Kell {time}</p>
                <h4 className="text-lg font-bold font-montserrat sm:text-xl md:text-2xl">{name}</h4>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TodaysClasses;
