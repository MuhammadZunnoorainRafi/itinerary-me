import ActivityItem from '@itineract/components/ActivityItem';
import { Activity } from '@itineract/types/Activity';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

describe('ActivityItem', () => {
  const activity: Activity = {
    id: 'test-activity-1',
    name: 'Test Activity',
    description: 'This is a test activity',
    duration: 60,
    takeSpace: 1,
    createdAt: '2024-01-01T08:00:00'
  };

  afterEach(cleanup);

  it('renders without crashing', () => {
    render(<ActivityItem activity={activity} />);
  });

  it('renders activity name and description', () => {
    const { getByText } = render(<ActivityItem activity={activity} />);
    const nameElement = getByText(activity.name);
    const descriptionElement = getByText(activity.description);

    expect(nameElement).toBeDefined();
    expect(descriptionElement).toBeDefined();
  });
});
