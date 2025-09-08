import React from 'react';
import { promises as fs } from 'fs';
import { Product } from './types';
import PilatesLogoTransparent from '@/public/pilates_logo_transparent.png';
import Image from 'next/image';
import H1 from '@/components/typography/H1';
import { supabaseClient } from '@/lib/db/client';
const pricingTitle = 'Hinnakiri';
const pricingSubtitle = 'Kehtiv alates 15. jaanuar 2024';

const PriceCard = async ({ product }: { product: Product }) => {
  const { id, name, price, info, quantity } = product;

  const priceString = new Intl.NumberFormat('et-ET', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div
      className="relative flex sm:flex-col justify-start w-full sm:h-[288px] sm:w-[208px] text-center
      before:content-[''] before:absolute before:left-0 before:-z-10 before:w-full before:h-full 
      before:rounded-sm before:outline-8 before:outline-pallette-pink before:outline 
      bg-pallette-pink rounded-md border-dashed border-2 border-pallette-green
      ">
      <div className="py-2 sm:py-0 sm:px-2">
        <div className="flex items-center justify-center w-20 h-full border-r-2 border-dashed sm:p-4 sm:border-r-0 sm:border-b-2 sm:w-full border- border-pallette-green">
          <Image
            src={PilatesLogoTransparent}
            alt="Erika Viira Pilateseakadeemia logo"
            className="origin-center scale-150 -rotate-90 sm:scale-100 sm:rotate-0"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 py-6">
        <h2 className="relative text-lg font-merriweather-bold">{name}</h2>
        <h3 className="relative mb-auto font-merriweather-bold">{quantity}</h3>
        {info &&
          info.length > 0 &&
          info.map((bullet, index) => (
            <p key={id + '_bullet_' + index} className="relative mb-2">
              {bullet}
            </p>
          ))}
        <h3 className="relative text-5xl md:text-6xl font-bold font-merriweather-bold">
          {priceString}
        </h3>
      </div>
    </div>
  );
};

const PricingPage = async () => {
  /*   const { data } = await supabaseClient
    .from('pricing')
    .select('*')
    .order('priority', { ascending: true }); */

  const data = [
    {
      id: '1',
      name: 'Rühmatreening',
      quantity: '1 kord',
      price: 15,
      info: null,
      priority: 1,
    },
    {
      id: '2',
      name: 'Rühmatreeningud',
      quantity: '4-korra kaart',
      price: 40,
      info: ['Kehtib 1 kuu'],
      priority: 2,
    },
    {
      id: '3',
      name: 'Rühmatreeningud',
      quantity: '8-korra kaart',
      price: 65,
      info: ['Kehtib 1 kuu'],
      priority: 3,
    },
    {
      id: '4',
      name: 'Personaaltreening',
      quantity: '1 kord',
      price: 30,
      info: null,
      priority: 4,
    },
    {
      id: '5',
      name: 'Duo-treening',
      quantity: '1 kord',
      price: 40,
      info: null,
      priority: 5,
    },
  ];

  return (
    <>
      <H1>{pricingTitle}</H1>
      <p className="max-w-2xl text-lg font-light text-center text-black sm:mt-2 md:mt-4 font-montserrat md:text-xl">
        {pricingSubtitle}
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 sm:gap-6 mt-8">
        {data
          ? data.map((product) => (
              <PriceCard key={product.id} product={product} />
            ))
          : 'Hinnakiri avaldatakse peatselt.'}
      </div>
    </>
  );
};

export default PricingPage;
