import { promises as fs } from 'fs';
import type { Tund } from '@/lib/types';
import { cn, currentDay } from '@/lib/utils';
import Link from 'next/link';
import Divider from '@/components/layout/nav/Divider';

const heroTitle = 'Tule, võimleme koos!';
const heroSubtitle = 'Ootan Sind Pilatese treeningutesse õdusas Viljandi kesklinna stuudios!';

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
      <h1 className="md:self-start mt-10 sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold text-2xl md:text-6xl text-black">
        {heroTitle}
      </h1>
      <p className="md:self-start sm:mt-2 sm:text-xl md:mt-4 font-montserrat text-lg md:text-2xl text-black max-w-3xl font-light">
        {heroSubtitle}
      </p>

      <Divider />
      <h2 className="md:self-start sm:text-xl font-merriweather-bold text-lg md:text-3xl text-black">
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
                <p className="font-montserrat text-base sm:text-lg md:text-xl">Kell {time}</p>
                <h4 className="font-montserrat text-lg sm:text-xl md:text-2xl font-bold">{name}</h4>
              </div>
            );
          })}
        </div>
      )}
      <Link
        href={'/tunniplaan'}
        className="w-full sm:w-auto ml-auto p-4 flex gap-2 bg-pallette-green md:text-xl text-white font-montserrat"
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
