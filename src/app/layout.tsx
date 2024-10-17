import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@itineract/components/layout/Header';
import Providers from '@itineract/context/Providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Itineract - Your Getaway Plan Starts Here (Demo)',
  description:
    'Plan your next getaway with Itineract. Create your own itinerary, share it with friends, and explore the world together.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <ToastContainer />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
