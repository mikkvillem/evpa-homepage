import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import FacebookLogo from '../../../public/fb_logo.png';
import Image from 'next/image';
import PilatesLogoTransparent from '../../../public/pilates_logo_transparent.png';

type Props = {
  navMap: Record<string, string>;
  className?: string;
};

const NavSheet = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className={cn('w-8 h-8', props.className)}>
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-48 mb-8">
          <Link href="/">
            <SheetClose asChild>
              <Image
                src={PilatesLogoTransparent}
                alt="Erika Viira Pilatese Akadeemia logo"
                className=""
              />
            </SheetClose>
          </Link>
        </SheetHeader>
        <nav>
          <ul className="list-none space-y-3">
            {Object.entries(props.navMap).map(([name, link]) => {
              return (
                <li key={name}>
                  <Link href={link}>
                    <SheetClose>
                      <p className="text-base font-merriweather-bold capitalize hover:text-pallette-green">
                        {name}
                      </p>
                    </SheetClose>
                  </Link>
                </li>
              );
            })}
            <li>
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
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
