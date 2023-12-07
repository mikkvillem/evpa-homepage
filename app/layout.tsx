import type { Metadata } from 'next'
import { Merriweather, Montserrat } from 'next/font/google'
import './globals.css'

const merriweatherBold = Merriweather({ weight: '700', subsets: ['latin'], variable: '--font-merriweather-bold' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'Erika Viira Pilatese Akadeemia',
  description: 'Pilatese trennid Viljandi kesklinnas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${merriweatherBold.variable} ${montserrat.variable} font-montserrat bg-pallette-beige`}>{children}</body>
    </html>
  )
}
