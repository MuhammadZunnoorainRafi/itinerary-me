import { cleanup, render, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';

import DaysList from '../components/DaysList';

describe('DaysList', () => {
  afterEach(cleanup);

  const dates = [
    '2024-01-01',
    '2024-01-02',
    '2024-01-03',
    '2024-01-04',
    '2024-01-05',
    '2024-01-06',
    '2024-01-07',
    '2024-01-08',
    '2024-01-09',
    '2024-01-10'
  ];

  const activeDay = '2024-01-01';
  const setActiveDay = vi.fn();

  it('should render the Days List', () => {
    render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );
  });

  it('renders the correct number of days', () => {
    const { getAllByTestId } = render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );
    const days = getAllByTestId('day');
    const numberOfDays = 10;
    expect(days.length).toBe(numberOfDays);
  });

  it('renders the correct day numbers', () => {
    const { getAllByTestId } = render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );
    const days = getAllByTestId('day');

    days.forEach((day, index) => {
      expect(day.textContent).toBe(`Jan ${index + 1}`);
    });
  });

  it('should highlight the first day as active', () => {
    const { getAllByTestId } = render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );
    const currentActiveDay = getAllByTestId('day')[0];
    expect(currentActiveDay.attributes.getNamedItem('data-active')?.value).toBe(
      'true'
    );
  });

  it('should highlight a day as active when clicked', () => {
    const { getAllByTestId } = render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );
    const days = getAllByTestId('day');
    days.forEach((day, index) => {
      fireEvent.click(day);
      expect(setActiveDay).toHaveBeenCalledWith(dates[index]);
    });
  });

  it('should only highlight one day as active when a day is clicked', () => {
    const { getAllByTestId, rerender } = render(
      <DaysList
        dates={dates}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
    );

    const newActiveDay = '2024-01-02';
    rerender(
      <DaysList
        dates={dates}
        activeDay={newActiveDay}
        setActiveDay={setActiveDay}
      />
    );
    const newActiveDayElement = getAllByTestId('day').find((day) => day.attributes.getNamedItem('data-active')?.value === "true");
    expect(newActiveDayElement?.textContent).toBe('Jan 2');
  });
});
