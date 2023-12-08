import React from 'react';
import NavSheet from './NavSheet';
import Image from 'next/image';
import PilatesLogoTransparent from '../../../public/pilates_logo_transparent.png';

type Props = {};

const navMap = {
  tunniplaan: '/tunniplaan',
  hinnakiri: '/hinnakiri',
  pilatesest: '/pilatesest',
  kontakt: '/kontakt',
} as const;

const Header = (props: Props) => {
  return (
    <header className="w-full flex justify-between sm:justify-center items-center relative py-2">
      <div className="w-48">
        <Image
          src={PilatesLogoTransparent}
          alt="Erika Viira Pilatese Akadeemia logo"
          className=""
        />
      </div>
      <NavSheet
        className="sm:absolute sm:right-0 sm:transform sm:-translate-y-1/2"
        navMap={navMap}
      />
    </header>
  );
};

export default Header;
