import ItineraryTitle from '@itineract/components/ItineraryTitle';
import { Itinerary } from '@itineract/types/Itinerary';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

const testItinerary: Itinerary = {
  id: 'test-itinerary',
  title: 'Test Itinerary 2024',
  startDate: '2024-06-12',
  endDate: '2024-06-18',
  activities: {
    unbooked: {},
    booked: {}
  }
};

describe('Itinerary  title', () => {
  afterEach(cleanup);

  it('displays without errors', () => {
    render(<ItineraryTitle itinerary={testItinerary} />);
  });

  it('displays the title of the itinerary and the dates', () => {
    const { getAllByRole } = render(
      <ItineraryTitle itinerary={testItinerary} />
    );
    const [title, dates] = getAllByRole('heading');
    expect(title.textContent).toBe('Test Itinerary 2024');
    expect(dates.textContent).toBe('Jun 12 - 18, 2024');
  });

  // Add more tests here...
});
