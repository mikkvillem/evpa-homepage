import { Merriweather, Montserrat } from 'next/font/google';
import '@/app/globals.css';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-montserrat bg-pallette-beige flex flex-col w-full h-full min-h-screen relative',
          merriweatherBold.variable,
          montserrat.variable
        )}
      >
        <div className="h-full p-4">
          <main className="relative flex flex-col items-start w-full min-h-full mx-auto mb-6 md:max-w-4xl lg:max-w-6xl md:items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
