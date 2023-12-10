import React from 'react';
import NavSheet from './NavSheet';
import Image from 'next/image';
import PilatesLogoTransparent from '../../../public/pilates_logo_transparent.png';
import Link from 'next/link';

type Props = {};

const navMap = {
  tunniplaan: '/tunniplaan',
  hinnakiri: '/hinnakiri',
  pilatesest: '/pilatesest',
  kontakt: '/kontakt',
} as const;

const Header = (props: Props) => {
  return (
    <header className="py-2 space-y-4">
      <div className="w-full flex justify-between sm:justify-center items-center relative ">
        <div className="w-48 md:w-96">
          <Image
            src={PilatesLogoTransparent}
            alt="Erika Viira Pilatese Akadeemia logo"
            className=""
          />
        </div>
        <div className="md:hidden">
          <NavSheet
            className="sm:absolute sm:right-0 sm:transform sm:-translate-y-1/2"
            navMap={navMap}
          />
        </div>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-center md:items-center gap-28">
        {Object.entries(navMap).map(([name, link]) => {
          return (
            <Link
              key={name}
              className="text-lg font-merriweather-bold capitalize"
              href={link}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
