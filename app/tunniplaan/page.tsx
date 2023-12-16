import Timetable from '@/components/layout/Timetable';
import Divider from '@/components/layout/nav/Divider';
import React from 'react';
import { promises as fs } from 'fs';
import type { Tund } from '@/lib/types';

const scheduleTitle = 'Tunniplaan';
const scheduleSubtitle =
  'Tundidesse on vajalik eelnevalt registreeruda. Tund toimub vähemalt 3 osalejaga.';

const TimetablePage = async () => {
  const file = await fs.readFile(process.cwd() + '/app/tunniplaan/tunniplaan.json', 'utf8');
  const schedule: { workouts: Tund[] } = JSON.parse(file);
  return (
    <>
      <h1 className="text-center mt-10 sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold text-2xl md:text-6xl text-black">
        {scheduleTitle}
      </h1>
      <p className="text-center sm:mt-2 sm:text-xl md:mt-4 font-montserrat text-lg md:text-2xl text-black max-w-3xl font-light">
        {scheduleSubtitle}
      </p>
      <Divider />
      <Timetable workouts={schedule.workouts} />
    </>
  );
};

export default TimetablePage;
