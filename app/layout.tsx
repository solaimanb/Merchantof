import Footer from '@/components/shared/footer/Footer';
import ClientThemeProvider from '@/providers/ClientThemeProvider';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/shared/header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MerchantOF',
  description:
    'MerchantOF is a platform for merchants to manage their online store.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientThemeProvider>
          <NextUIProvider>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
          </NextUIProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
