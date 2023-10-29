import './globals.css';
import type { Metadata } from 'next';
import IntegralCF from './_fonts/integral-cf/font';
import Inter from './_fonts/inter/font';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Clothy - Shop',
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
        className={`${IntegralCF.variable} ${Inter.variable} bg-primary-0 font-inter font-normal text-primary-900 antialiased selection:bg-primary-900 selection:text-primary-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
