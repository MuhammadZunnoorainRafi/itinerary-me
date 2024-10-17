import Header from '@itineract/components/layout/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Itineract - Your Getaway Plan Starts Here (Demo)',
  description:
    'Plan your next getaway with Itineract. Create your own itinerary, share it with friends, and explore the world together.'
};

export default function DemoLayout({
  children
}: Readonly<React.PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto">{children}</main>
    </>
  );
}
