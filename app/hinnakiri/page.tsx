import React from 'react';
import { promises as fs } from 'fs';
import { Product } from './types';
import PilatesLogoTransparent from '../../public/pilates_logo_transparent.png';
import Image from 'next/image';

const pricingTitle = 'Hinnakiri';
const pricingSubtitle = 'Kehtiv alates 01. jaanuar 2022';

const PriceCard = ({ product }: { product: Product }) => {
  const { id, name, price, info } = product;

  const priceString = new Intl.NumberFormat('et-ET', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div
      className="relative flex flex-col justify-start h-[288px] w-[208px] text-center
      before:content-[''] before:absolute before:left-0 before:-z-10 before:w-full before:h-full before:outline 
      before:rounded-sm before:outline-8 before:outline-pallette-pink
      bg-pallette-pink text- rounded-md border-dashed border-2 border-pallette-green
      "
    >
      <div className="px-2">
        <div className="w-full p-4 h-18 border- border-b-2 border-pallette-green border-dashed">
          <Image
            src={PilatesLogoTransparent}
            alt="Erika Viira Pilateseakadeemia logo"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between py-8">
        <h2 className="font-merriweather-bold relative text-xl font-bold">{name}</h2>
        {info.length > 0 &&
          info.map((bullet, index) => (
            <p
              key={id + '_bullet_' + index}
              className="relative"
            >
              {bullet}
            </p>
          ))}
        <h3 className="font-merriweather-bold relative text-6xl font-bold">{priceString}</h3>
      </div>
    </div>
  );
};

const PricingPage = async () => {
  const file = await fs.readFile(process.cwd() + '/app/hinnakiri/pricing.json', 'utf8');
  const { products }: { products: Product[] } = JSON.parse(file);
  return (
    <>
      <h1 className="text-center mt-10 sm:mt-8 sm:text-4xl md:mt-14 font-merriweather-bold text-2xl md:text-6xl text-black">
        {pricingTitle}
      </h1>
      <p className="text-center sm:mt-2 sm:text-xl md:mt-4 font-montserrat text-lg md:text-2xl text-black max-w-3xl font-light">
        {pricingSubtitle}
      </p>
      <div className="mt-8 flex flex-wrap justify-center w-full gap-4">
        {products.map((product) => (
          <PriceCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default PricingPage;
