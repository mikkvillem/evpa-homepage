import React from 'react';
import NavSheet from './NavSheet';
import Image from 'next/image';
import PilatesLogoTransparent from '../../../public/pilates_logo_transparent.png';
import FacebookLogo from '../../../public/fb_logo.png';
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
    <header className="relative space-y-4">
      <div className="w-full flex justify-between sm:justify-center items-center relative ">
        <div className="md:mt-4 w-48 md:w-64">
          <Link href="/">
            <Image
              src={PilatesLogoTransparent}
              alt="Erika Viira Pilatese Akadeemia logo"
              className=""
            />
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="md:hidden flex">
          <NavSheet
            className="sm:absolute sm:right-0 sm:transform sm:-translate-y-1/2"
            navMap={navMap}
          />
        </div>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:pt-4 md:flex md:flex-row md:justify-center md:items-center md:gap-20 lg:gap-28">
        {Object.entries(navMap).map(([name, link]) => {
          return (
            <Link
              key={name}
              className="text-base lg:text-lg font-merriweather-bold capitalize hover:text-pallette-green"
              href={link}
            >
              {name}
            </Link>
          );
        })}
        <a
          href="https://www.facebook.com/Erika-Viira-Pilatese-Akadeemia-721566977879613/"
          target="_blank"
        >
          <Image
            src={FacebookLogo}
            alt="Faceook logo"
            width={28}
            height={28}
            className=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
