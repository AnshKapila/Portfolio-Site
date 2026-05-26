import React from 'react';
import type { Metadata } from 'next';
import "@/src/index.css";
import { ThemeProvider } from "./ThemeProvider";
import { NavbarWrapper } from "./NavbarWrapper";
import { Footer } from "@/src/components/Footer";

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
    <html lang="en">
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
