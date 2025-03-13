import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Head from "next/head";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brent Ibañez",
  description: "A 3rd Year Computer Science Student at University of St. La Salle",
};

const generalSans = localFont({
  variable: '--gen-sans',
  src: [
    {
      path: "./../public/fonts/GeneralSans/Regular.woff2",
      weight: '400',
      style: 'normal'
    },
    {
      path: './../public/fonts/GeneralSans/Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: "./../public/fonts/GeneralSans/Semibold.woff2",
      weight: '600',
      style: 'normal'
    }
  ]
})

const layGrotesk = localFont({
  variable: '--lay-grotesk',
  src: [
    {
      path: "./../public/fonts/LayGrotesk/Regular.woff2",
      weight: '400',
      style: 'normal'
    },
    {
      path: "./../public/fonts/LayGrotesk/Bold.woff2",
      weight: '700',
      style: 'normal'
    },
    {
      path: "./../public/fonts/LayGrotesk/Semibold.woff2",
      weight: '600',
      style: 'normal'
    }

  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${layGrotesk.className} ${generalSans.variable} bg-white`}>{children}</body>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      </Head>
    </html>
  );
}
