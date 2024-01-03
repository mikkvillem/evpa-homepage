import { promises as fs } from 'fs';
import type { Tund } from '../tunniplaan/types';
import Link from 'next/link';
import Divider from '@/components/layout/nav/Divider';
import TodaysClasses from './TodaysClasses';

const heroTitle = 'Tule, võimleme koos!';
const heroSubtitle = 'Ootan Sind Pilatese treeningutesse koduses Viljandi kesklinna stuudios!';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/tunniplaan/tunniplaan.json', 'utf8');
  const { workouts }: { workouts: Tund[] } = JSON.parse(file);

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
      <TodaysClasses workouts={workouts} />
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
