import Image from 'next/image';
import React from 'react';
import ErikaViiraNarritaja from '../../public/erika_viira.jpg';
import H1 from '@/components/typography/H1';

const aboutTitle = 'Õpetajast';

const cv = {
  work: [
    {
      start: 2011,
      end: undefined,
      description:
        'oma stuudios (Erika Viira Pilatese Akadeemia), rühmatöö ja personaaltreeneri kogemus',
    },
    {
      start: 2012,
      end: 2016,
      description:
        'TÜ Viljandi Kultuuriakadeemia Etenduskunstide osakonna tudengite Pilatese õpetaja',
    },
    {
      start: 2007,
      end: 2011,
      description: 'FB Fortius OÜ - Pilatese õpetaja',
    },
  ],
  education: [
    {
      start: 2017,
      end: undefined,
      description:
        'Kursus "Vaagnapõhjalihaste anatoomia", Anu Toonverk (TÜ kehakultuuri teaduskond, Eesti)',
    },
    {
      start: 2016,
      end: undefined,
      description: 'Koolitus "A deep dive into Pilates", Brett Miller (Rootsi)',
    },
    {
      start: 2009,
      end: 2016,
      description:
        'Pilatese mati- ja masinatreeningu koolitused (Mat Foundation, Mat Level 1,  Mat Level 2, Cadillac Foundation), Corpus Studios, Kelly McKinnon(Belgia)',
    },
    {
      start: 2008,
      end: undefined,
      description: 'EEVL korraldatud Pilatese koolitus',
    },
    {
      start: 2006,
      end: undefined,
      description: 'Martin Ilvese Massaažikooli klassikalise massaaži kursus',
    },
    {
      start: 2004,
      end: undefined,
      description:
        'TÜ kehakultuuri teaduskonna täiendkoolituskursus "Rühiõpetus rasedatele ja noortele emadele"',
    },
    {
      start: 2000,
      end: 2003,
      description: 'FAF aeroobikatreeneri koolitused, tasemetõstmise kursused',
    },
  ],
};

const AboutPage = () => {
  return (
    <>
      <H1 className="">{aboutTitle}</H1>
      <p className="max-w-2xl text-lg font-light text-black md:text-center sm:mt-2 md:mt-4 font-montserrat md:text-xl">
        Tere, mina olen Erika. Juhendan Sinu Pilatese treeninguid omanimelises akadeemias juba
        aastast 2011.
      </p>
      <Image
        alt="Erika viira narritaja poosis rohelisel murul"
        src={ErikaViiraNarritaja}
        className="mt-4 border-4 rounded-xl outline outline-6 outline-pallette-green border-pallette-beige"
      />

      <div className="mt-3">
        <h2 className="my-2 text-lg text-black text-pallette-green md:my-4 sm:my-3 md:self-start sm:text-xl font-merriweather-bold md:text-3xl">
          Erialane töökogemus
        </h2>
        {cv.work.map(({ start, end, description }) => {
          return (
            <div
              key={description}
              style={{ gridTemplateColumns: '100px 1fr' }}
              className="grid md:gap-x-4 md:gap-y-2"
            >
              <p className="col-span-2 mt-2 font-semibold text-left md:mt-0 md:col-span-1">
                {start} - {end ?? '...'}
              </p>
              <p className="col-span-2 text-sm sm:text-base md:col-span-1">{description}</p>
            </div>
          );
        })}
        <h2 className="mt-8 text-lg text-black text-pallette-green md:my-4 sm:my-3 md:self-start sm:text-xl font-merriweather-bold md:text-3xl">
          Erialane koolitus
        </h2>
        {cv.education.map(({ start, end, description }) => {
          return (
            <div
              key={description}
              style={{ gridTemplateColumns: '100px 1fr' }}
              className="grid md:gap-x-4 md:gap-y-2"
            >
              <p className="col-span-2 mt-2 font-semibold text-left md:mt-0 md:col-span-1">
                {start}
                {end ? ` - ${end}` : ''}
              </p>
              <p className="col-span-2 text-sm sm:text-base md:col-span-1">{description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutPage;
