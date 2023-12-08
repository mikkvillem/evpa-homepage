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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-montserrat bg-pallette-beige p-4 flex flex-col h-full min-h-screen ',
          merriweatherBold.variable,
          montserrat.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
