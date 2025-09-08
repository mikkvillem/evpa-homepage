import Timetable from '@/app/(home)/tunniplaan/Timetable';
import Divider from '@/components/layout/nav/Divider';
import type { Tund } from './types';
import H1 from '@/components/typography/H1';
import Link from 'next/link';
/* import { supabaseClient } from '@/lib/db/client'; */
import { classes as data } from '@/lib/timetable';

const scheduleTitle = 'Tunniplaan';
const scheduleSubtitle =
  'Tundidesse on vajalik eelnevalt registreerida. Tund toimub vähemalt 3 osalejaga. ';

const TimetablePage = async () => {
  /*   const { data } = await supabaseClient
    .from('workouts')
    .select('*')
    .order('time', { ascending: true }); */
  const workouts = data as Tund[] | null;
  return (
    <>
      <H1>{scheduleTitle}</H1>
      <p className="max-w-2xl text-lg font-light text-black md:text-center sm:mt-2 md:mt-4  font-montserrat md:text-xl">
        Kehtiv alates 01.09.2025
      </p>
      <Divider />
      <p className="max-w-2xl text-lg font-light text-black md:text-center mb-4 font-montserrat md:text-xl">
        {scheduleSubtitle}
        <span>
          Registreerimiseks{' '}
          <Link
            href="/kontakt"
            className="text-pallette-green font-semibold hover:underline hover:underline-offset-2">
            võta ühendust
          </Link>
          .
        </span>
      </p>
      <Timetable workouts={workouts || []} />
    </>
  );
};

export default TimetablePage;
