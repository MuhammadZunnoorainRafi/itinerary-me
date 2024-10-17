import dayjs from 'dayjs';
import { useState } from 'react';

export const useActivityDates = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInDays = Math.ceil(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );

  const dateArray = Array.from({ length: diffInDays + 1 }, (_, i) => {
    const date = dayjs(startDate);
    const exactDate = date.add(i, 'day');
    return exactDate.format(`YYYY-MM-DD`);
  });

  const [activeDay, setActiveDay] = useState(dateArray[0]);
  return { activeDay, setActiveDay, dateArray };
};
