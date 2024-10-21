import { Itinerary } from '@itineract/types/Itinerary';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

import CalendarOfActivities from '../components/CalendarOfActivities';

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
        takeSpace: 1,
        createdAt: '2024-06-01T08:00:00'
      },
      'activity-2': {
        id: 'activity-1',
        name: 'Some other activity',
        description: '1 day, 3 pax',
        photo: '/images/parasail.png',
        takeSpace: 1,
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
        takeSpace: 1,
        createdAt: '2024-06-01T08:00:00',
        date: '2024-06-12',
        startTime: '09:00',
        endTime: '10:00'
      }
    }
  }
};

describe('CalendarOfActivities', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-12"
        activities={testItinerary.activities.booked}
      />
    );
  });

  it('is scrollable', () => {
    const { getByTestId } = render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-12"
        activities={testItinerary.activities.booked}
      />
    );
    const calendar = getByTestId('calendar');
    expect(calendar.classList).toContain('overflow-y-scroll');
  });

  it('renders the correct number of droppable hour components', () => {
    const { getAllByTestId } = render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-12"
        activities={testItinerary.activities.booked}
      />
    );
    const droppableHours = getAllByTestId('droppable-hour');
    expect(droppableHours).toHaveLength(17);
  });

  it('renders the correct number of half-hour components', () => {
    const { getAllByTestId } = render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-12"
        activities={testItinerary.activities.booked}
      />
    );
    const droppableHalfHours = getAllByTestId('droppable-half-hour');
    expect(droppableHalfHours).toHaveLength(34);
  });

  it('renders the correct number of activity components', () => {
    const { getAllByTestId } = render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-12"
        activities={testItinerary.activities.booked}
      />
    );
    const activityItems = getAllByTestId('activity-activity-3');
    expect(activityItems).toHaveLength(1);
  });

  it('does not render the activity on a different day', () => {
    const { queryByTestId } = render(
      <CalendarOfActivities
        {...testItinerary}
        activeDay="2024-06-13"
        activities={testItinerary.activities.booked}
      />
    );
    const activityItem = queryByTestId('activity-activity-3');
    expect(activityItem).toBeNull();
  });
});
