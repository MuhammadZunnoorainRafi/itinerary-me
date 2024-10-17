import ItineraryBooking from '@itineract/components/ItineraryBooking';
import { Itinerary } from '@itineract/types/Itinerary';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

const testItinerary: Itinerary = {
  id: 'test-itinerary',
  title: 'Test Itinerary 2024',
  startDate: '2024-06-12',
  endDate: '2024-06-18',
  activities: {
    unbooked: {
      'activity-1': {
        id: 'activity-1',
        name: 'Puka Beach Island',
        description: '1 day, 3 pax',
        photo: '/images/puka-beach.png',
        duration: 60,
        createdAt: '2024-06-01T08:00:00'
      },
      'activity-2': {
        id: 'activity-1',
        name: 'Some other activity',
        description: '1 day, 3 pax',
        photo: '/images/parasail.png',
        duration: 60,
        createdAt: '2024-06-01T08:00:00'
      }
    },
    booked: {
      'activity-3': {
        id: 'activity-3',
        name: 'Some booked activity',
        description: '1 day, 3 pax',
        photo: '/images/parasail.png',
        duration: 60,
        createdAt: '2024-06-01T08:00:00',
        date: '2024-06-12',
        startTime: '09:00',
        endTime: '10:00'
      }
    }
  }
};

describe('Itinerary booking', () => {
  afterEach(cleanup);

  it('displays without errors', () => {
    render(<ItineraryBooking itinerary={testItinerary} />);
  });

  it('displays the title of the itinerary and the dates', () => {
    const { getAllByRole } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const [title, dates] = getAllByRole('heading');
    expect(title.textContent).toBe('Test Itinerary 2024');
    expect(dates.textContent).toBe('Jun 12 - 18, 2024');
  });

  it('displays the unbooked activities section', () => {
    const { getByText } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const activitiesSection = getByText('Activities');
    expect(activitiesSection).toBeDefined();
  });

  it('displays a list of unbooked activities', () => {
    const { getAllByTestId, getByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const activities = getAllByTestId('activity', { exact: false });
    expect(activities).toHaveLength(3);
    const unbookedActivities = getByTestId('unbooked-activities');
    expect(unbookedActivities).toBeDefined();
    expect(unbookedActivities.childNodes).toHaveLength(2);
    expect(unbookedActivities.contains(activities[0])).toBe(true);
    expect(unbookedActivities.contains(activities[1])).toBe(true);
  });

  it('displays the names of each activity', () => {
    const { getByText } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const pukaBeachActivity = getByText('Puka Beach Island');
    expect(pukaBeachActivity).toBeDefined();

    const otherActivity = getByText('Some other activity');
    expect(otherActivity).toBeDefined();
  });

  it('displays the days list', () => {
    const { getAllByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const daysList = getAllByTestId('day');
    expect(daysList).toBeDefined();
  });

  it('displays the correct amount of days', () => {
    const { getAllByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const daysList = getAllByTestId('day');
    expect(daysList).toHaveLength(7);
    expect(daysList[0].textContent).toBe('Jun 12');
    expect(daysList[1].textContent).toBe('Jun 13');
    expect(daysList[2].textContent).toBe('Jun 14');
    expect(daysList[3].textContent).toBe('Jun 15');
    expect(daysList[4].textContent).toBe('Jun 16');
    expect(daysList[5].textContent).toBe('Jun 17');
    expect(daysList[6].textContent).toBe('Jun 18');
  });

  it('allows the days to be clickable', () => {
    const { getAllByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const daysList = getAllByTestId('day');

    daysList.forEach((day, _, days) => {
      fireEvent.click(day);
      const active = day.attributes.getNamedItem('data-active');
      expect(active).toBeDefined();
      expect(active?.value).toBe('true');

      const otherDays = days.filter((d) => d !== day);
      otherDays.forEach((otherDay) => {
        const nonActive = otherDay.attributes.getNamedItem('data-active');
        expect(nonActive?.value).toBe('false');
      });
    });
  });

  it('displays the correct amount of hours', () => {
    const { getAllByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const hoursList = getAllByTestId('droppable-hour');
    const bookedHoursList = getAllByTestId('booked-hour', { exact: false });
    expect(hoursList.length + bookedHoursList.length).toBe(18);
  });

  it('displays booked activities in the correct time slot', () => {
    const { getByText, getAllByTestId } = render(
      <ItineraryBooking itinerary={testItinerary} />
    );
    const bookedActivity = getByText('Some booked activity');
    expect(bookedActivity).toBeDefined();

    const bookedActivitySlot = getAllByTestId('booked-hour', {
      exact: false
    })[0];
    expect(bookedActivitySlot).toBeDefined();
    expect(bookedActivitySlot.textContent).contains('9:00 - 10:00AM');
    expect(bookedActivitySlot.contains(bookedActivity)).toBe(true);
  });

  it('allows an activity to be dragged from the unbooked list to the booked activities', () => {});
});
