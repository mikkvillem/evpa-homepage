import { promises as fs } from 'fs';
import { cn, currentDay } from '@/lib/utils';
import type { Tund } from '../tunniplaan/types';
import Link from 'next/link';
import Divider from '@/components/layout/nav/Divider';

const heroTitle = 'Tule, võimleme koos!';
const heroSubtitle = 'Ootan Sind Pilatese treeningutesse koduses Viljandi kesklinna stuudios!';

const colorMap = [
  'bg-pallette-pink',
  'bg-pallette-yellow',
  'bg-pallette-yellow',
  'bg-pallette-pink',
];

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/tunniplaan/tunniplaan.json', 'utf8');
  const schedule: { workouts: Tund[] } = JSON.parse(file);

  const groupByDay: Record<number, Tund[]> = schedule.workouts.reduce((acc, workout) => {
    acc[workout.day] = acc[workout.day] || [];
    acc[workout.day].push(workout);
    return acc;
  }, Object.create(null));

  const dayToday = currentDay();
  const todaysClasses = groupByDay[dayToday];
  return (
    <>
      <h1 className="mt-10 mb-2 text-2xl text-center text-black sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold md:text-6xl">
        {heroTitle}
      </h1>
      <p className="max-w-3xl text-lg font-light text-black md:text-center sm:mt-2 sm:text-xl md:mt-4 font-montserrat md:text-2xl">
        {heroSubtitle}
      </p>

      <Divider />
      <h2 className="text-lg text-black md:self-start sm:text-xl font-merriweather-bold md:text-3xl">
        Tänased rühmatreeningud
      </h2>
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
      <Link
        href={'/tunniplaan'}
        className="hover:scale-[102%] ease-in-out hover:opacity-95 transition duration-300 flex w-full gap-2 p-4 ml-auto text-white sm:w-auto bg-pallette-green md:text-xl font-montserrat"
      >
        Vaata kogu tunniplaani
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </>
  );
}
