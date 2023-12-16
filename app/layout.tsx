import type { Metadata } from 'next';
import { Merriweather, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/nav/Header';
import { cn } from '@/lib/utils';

const merriweatherBold = Merriweather({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-merriweather-bold',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Erika Viira Pilatese Akadeemia',
  description: 'Pilatese trennid Viljandi kesklinnas',
};

const BackgroundShape = ({
  className,
  fillClassName,
}: {
  className?: string;
  fillClassName: `fill-${string}`;
}) => (
  <div className={cn('w-8 aspect-square absolute', className)}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 250 250"
      width="100%"
      height="100%"
    >
      <path
        d="M9.9,111.1l79.1,60.7l60.1,77.4l81.2,0.8l9.7-101.4l-45.2-79.4l-89-63.1L31.6,0L9.9,111.1z"
        fill="currentColor"
        className={fillClassName}
      />
    </svg>
  </div>
);

const BackgroundPatternPolka = () => (
  <div
    style={{ backgroundSize: '8px 8px' }}
    className="absolute -left-8 -top-28 md:-left-32 md:top-24 bg-polka bg-repeat h-64 md:h-96 w-full origin-bottom-left transform -rotate-[38deg]"
  ></div>
);
const BackgroundPatternLines = () => (
  <div
    style={{ backgroundSize: '20px 20px' }}
    className="absolute bg-lines bg-repeat w-64 md:w-96 aspect-square rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-x-1/3 md:translate-y-1/3"
  ></div>
);

const BackgroundShapes = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden -z-10">
      <div className="w-full h-full relative">
        <BackgroundPatternPolka />
        <BackgroundPatternLines />
        <BackgroundShape
          fillClassName="fill-pallette-pink"
          className="-top-12 -right-10 w-44"
        />
        <BackgroundShape
          fillClassName="fill-pallette-red"
          className="-bottom-12 -left-10 w-24 transform -scale-100 -rotate-90"
        />
      </div>
    </div>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="w-"
    >
      <body
        className={cn(
          'font-montserrat bg-pallette-beige flex flex-col w-full h-full min-h-screen relative',
          merriweatherBold.variable,
          montserrat.variable
        )}
      >
        <div className="p-4 h-full">
          <Header />
          <main className="relative w-full md:max-w-4xl lg:max-w-5xl mx-auto flex min-h-full flex-col items-start md:items-center mb-6">
            {children}
          </main>
        </div>
        <BackgroundShapes />
      </body>
    </html>
  );
}
