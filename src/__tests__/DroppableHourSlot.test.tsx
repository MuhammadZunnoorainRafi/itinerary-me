import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';

import DroppableHourSlot from '../components/DroppableHourSlot';

describe('DroppableHourSlot', () => {
  afterEach(cleanup);

  it('renders without issues', () => {
    render(<DroppableHourSlot hour="09:00 - 10:00" />);
  });

  it('renders hour correctly', () => {
    const hour = '09:00 - 10:00';
    const { getByText } = render(<DroppableHourSlot hour={hour} />);
    expect(getByText('9:00 - 10:00AM'));
  });
});
