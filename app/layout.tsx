import React from 'react';
import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import "@/src/index.css";
import { ThemeProvider } from "./ThemeProvider";
import { NavbarWrapper } from "./NavbarWrapper";
import { Footer } from "@/src/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Intent Studios',
  description: 'We build digital products, websites, and brand identities.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="relative w-full min-h-screen bg-black flex flex-col font-sans selection:bg-white/30 text-white">
        <ThemeProvider>
          <NavbarWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
