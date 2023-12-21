import Image from 'next/image';
import React from 'react';
import ErikaViiraNarritaja from '../../public/erika_viira.jpg';

const aboutTitle = 'Erika Viira';

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
      <h1 className="mt-10 text-2xl text-center text-black sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold md:text-6xl">
        {aboutTitle}
      </h1>

      <div className="">
        <h2 className="text-pallette-green md:my-4 my-2 sm:my-3 md:self-start sm:text-xl font-merriweather-bold text-lg md:text-3xl text-black">
          Erialane töökogemus
        </h2>
        {/*         <h3 className="font-bold">Erialane töökogemus</h3>
         */}
        {cv.work.map(({ start, end, description }) => {
          return (
            <div
              key={description}
              style={{ gridTemplateColumns: '100px 1fr' }}
              className="grid md:gap-x-4 md:gap-y-2"
            >
              <p className="mt-2 md:mt-0 font-semibold col-span-2 text-left md:col-span-1">
                {start} - {end ?? '...'}
              </p>
              <p className="text-sm sm:text-base col-span-2 md:col-span-1">{description}</p>
            </div>
          );
        })}
        <h2 className="text-pallette-green md:my-4 mt-8 sm:my-3 md:self-start sm:text-xl font-merriweather-bold text-lg md:text-3xl text-black">
          Erialane koolitus
        </h2>
        {cv.education.map(({ start, end, description }) => {
          return (
            <div
              key={description}
              style={{ gridTemplateColumns: '100px 1fr' }}
              className="grid md:gap-x-4 md:gap-y-2"
            >
              <p className="mt-2 md:mt-0 font-semibold col-span-2 text-left md:col-span-1">
                {start}
                {end ? ` - ${end}` : ''}
              </p>
              <p className="text-sm sm:text-base col-span-2 md:col-span-1">{description}</p>
            </div>
          );
        })}
      </div>
      <Image
        alt="Erika viira narritaja poosis rohelisel murul"
        src={ErikaViiraNarritaja}
        className="mt-4 rounded-xl outline outline-6 outline-pallette-green border-4 border-pallette-beige"
      />
    </>
  );
};

export default AboutPage;
