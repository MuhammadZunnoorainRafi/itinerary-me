import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs'; // Import Dayjs type
import useDateStore from '@itineract/stores/useDateRangerStore';

type Props = {
  initialStartDate?: any;
  initialEndDate?: any;
};

export default function DatesRangesPicker({
  initialStartDate,
  initialEndDate
}: Props) {
  const initialStartD = initialStartDate ? dayjs(initialStartDate) : null;
  const initialEndD = initialEndDate ? dayjs(initialEndDate) : null;

  const [selectedDateRange, setSelectedDateRange] = React.useState<
    [Dayjs | null, Dayjs | null]
  >([initialStartD, initialEndD]);

  const { setDateRange } = useDateStore();

  const handleDateChange = (newDateRange: [Dayjs | null, Dayjs | null]) => {
    setSelectedDateRange(newDateRange);

    const [startDate, endDate] = newDateRange;
    // Format the date values and update the store
    if (startDate && endDate) {
      setDateRange({
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD')
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DemoItem label="" component="DateRangePicker">
          <DateRangePicker
            calendars={1}
            value={selectedDateRange}
            onChange={handleDateChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
