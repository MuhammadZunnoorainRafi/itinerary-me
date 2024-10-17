import CalendarDisplay from '@itineract/components/CalendarDisplay';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('CalendarDisplay', () => {
  it('should render the Calendar Display', () => {
    render(<CalendarDisplay startDate="2020-01-01" endDate="2020-01-01" />);
  });

  it('displays the hours per day', () => {
    const { getAllByText } = render(
      <CalendarDisplay startDate="2020-01-01" endDate="2020-01-01" />
    );

    expect(getAllByText('12:00')).toBeDefined();
    expect(getAllByText('01:00')).toBeDefined();
    expect(getAllByText('02:00')).toBeDefined();
    expect(getAllByText('03:00')).toBeDefined();
    expect(getAllByText('04:00')).toBeDefined();
    expect(getAllByText('05:00')).toBeDefined();
    expect(getAllByText('06:00')).toBeDefined();
    expect(getAllByText('07:00')).toBeDefined();
    expect(getAllByText('08:00')).toBeDefined();
    expect(getAllByText('09:00')).toBeDefined();
    expect(getAllByText('10:00')).toBeDefined();
    expect(getAllByText('11:00AM')).toBeDefined();
    expect(getAllByText('12:00')).toBeDefined();
    expect(getAllByText('01:00')).toBeDefined();
    expect(getAllByText('02:00')).toBeDefined();
    expect(getAllByText('03:00')).toBeDefined();
    expect(getAllByText('04:00')).toBeDefined();
    expect(getAllByText('05:00')).toBeDefined();
    expect(getAllByText('06:00')).toBeDefined();
    expect(getAllByText('07:00')).toBeDefined();
    expect(getAllByText('08:00')).toBeDefined();
    expect(getAllByText('09:00')).toBeDefined();
    expect(getAllByText('10:00')).toBeDefined();
    expect(getAllByText('11:00')).toBeDefined();
  });
});
