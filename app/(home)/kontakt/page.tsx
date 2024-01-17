import React from 'react';
import Image from 'next/image';
import MapImage from '@/public/pilates_map.svg';
import Link from 'next/link';
import H1 from '@/components/typography/H1';

const contactTitle = 'Kontakt';
const contact = {
  phone: '+372 50 99 599',
  address: 'Jakobsoni 4a, Viljandi',
  email: 'pilateseakadeemia@gmail.com',
};

const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=58.3670847-25.5957376,21z&query_place_id=ChIJz7eE54SY7EYR8IJst1L2Q90';
const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-4 mt-10 sm:mt-8 md:mt-14 md:flex-row-reverse md:gap-12">
      <div className="">
        <H1 className="mt-0 text-left md:mt-0">{contactTitle}</H1>
        <div className="flex gap-x-3">
          <div className="">
            {Object.keys(contact).map((key) => {
              const typeTitle = key === 'phone' ? 'Tel' : key === 'address' ? 'Aadress' : 'Email';
              return (
                <p
                  key={'contact_' + key}
                  className="text-lg font-semibold text-left text-black sm:text-xl md:mt-4 font-montserrat"
                >
                  {`${typeTitle}: `}
                </p>
              );
            })}
          </div>
          <div className="text-lg font-light text-left text-black sm:text-xl font-montserrat">
            {Object.entries(contact).map(([type, value]) => {
              if (type === 'address')
                return (
                  <a
                    key={type}
                    href={mapsLink}
                    target="_blank"
                    style={{ textUnderlineOffset: '6px' }}
                    className="block underline md:mt-4 hover:text-pallette-green"
                  >
                    {value}
                  </a>
                );
              if (type === 'email')
                return (
                  <a
                    key={type}
                    href={`mailto:${value}`}
                    target="_blank"
                    style={{ textUnderlineOffset: '6px' }}
                    className="block underline md:mt-4 hover:text-pallette-green"
                  >
                    {value}
                  </a>
                );
              return (
                <p
                  key={type}
                  className="md:mt-4"
                >
                  {value}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <a
        target="_blank"
        href={mapsLink}
      >
        <Image
          alt="Studio location"
          src={MapImage}
          className="md:max-w-[400px] mx-auto aspect-square rounded-lg outline outline-6 outline-pallette-green border-4 border-pallette-beige"
        />
      </a>
    </div>
  );
};

export default ContactPage;
