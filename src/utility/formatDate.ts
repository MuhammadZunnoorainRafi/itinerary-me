// /src/utils/formatDate.ts
import { format } from 'date-fns';

export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Format start date and end date
  const formattedStart = format(start, 'MMM d');
  const formattedEnd = format(end, 'd');        
  const year = format(end, 'yyyy');       

  return `${formattedStart}-${formattedEnd}, ${year}`;
};
