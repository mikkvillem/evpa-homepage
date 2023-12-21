import Timetable from '@/app/tunniplaan/Timetable';
import Divider from '@/components/layout/nav/Divider';
import { promises as fs } from 'fs';
import type { Tund } from './types';
import H1 from '@/components/typography/H1';

const scheduleTitle = 'Tunniplaan';
const scheduleSubtitle =
  'Tundidesse on vajalik eelnevalt registreeruda. Tund toimub vähemalt 3 osalejaga.';

const TimetablePage = async () => {
  const file = await fs.readFile(process.cwd() + '/app/tunniplaan/tunniplaan.json', 'utf8');
  const schedule: { workouts: Tund[] } = JSON.parse(file);
  return (
    <>
      <H1>{scheduleTitle}</H1>
      <p className="text-center sm:mt-2 md:mt-4 font-montserrat text-lg md:text-xl text-black max-w-2xl font-light">
        {scheduleSubtitle}
      </p>
      <Divider />
      <Timetable workouts={schedule.workouts} />
    </>
  );
};

export default TimetablePage;
