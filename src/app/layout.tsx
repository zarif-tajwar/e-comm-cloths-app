import './globals.css';
import type { Metadata } from 'next';
import IntegralCF from './_fonts/integral-cf/font';
import Navbar from '@/components/Navbar/Navbar';
import PlusJakartaSans from './_fonts/plus-jakarta-sans/font';
import Footer from '@/components/Sections/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${IntegralCF.variable} light ${PlusJakartaSans.variable} bg-white font-plus-jakarta-sans antialiased selection:bg-black selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
