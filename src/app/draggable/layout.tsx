import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Itineract - Your Getaway Plan Starts Here (Demo)',
  description: 'Test app'
};

export default function DraggableLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
