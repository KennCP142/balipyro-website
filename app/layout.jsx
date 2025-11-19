import { Nunito, Barlow } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';
import AOSInit from '@/components/AOSInit';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-barlow',
});

export const metadata = {
  title: 'Bali Pyro 2 - Illuminating Moments, Creating Memories',
  description: 'We are a lighting rental service provider based in Bali, Indonesia. We can provide installation & arrangement for many types of stages and events.',
  icons: {
    icon: '/img/logo/logo_icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${barlow.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BootstrapClient />
        <AOSInit />
      </body>
    </html>
  );
}
