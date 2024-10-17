import { useDroppable } from '@dnd-kit/core';
import { useActivityDates } from '@itineract/hooks/useActivityDates';

type HourDroppableProps = {
  hour: string;
};

const HourDroppable: React.FC<HourDroppableProps> = ({ hour }) => {
  const { setNodeRef: droppable } = useDroppable({
    id: `${hour}-droppable`
  });

  return (
    <div
      ref={droppable}
      className="min-h-[85px] p-3 min-w-screen-md border border-b-0 border-primary flex justify-start items-center"
    >
      <p className="text-sm">{hour.split(' - ')[0]}</p>
      <span className="sr-only">{hour}</span>
    </div>
  );
};

type CalendarDisplayProps = {
  startDate: string;
  endDate: string;
};

const CalendarDisplay: React.FC<CalendarDisplayProps> = ({
  startDate,
  endDate
}) => {
  const { activeDay, dateArray } = useActivityDates(startDate, endDate);
  const hours = [
    '12:00 - 01:00AM',
    '01:00 - 02:00AM',
    '02:00 - 03:00AM',
    '03:00 - 04:00AM',
    '04:00 - 05:00AM',
    '05:00 - 06:00AM',
    '06:00 - 07:00AM',
    '07:00 - 08:00AM',
    '08:00 - 09:00AM',
    '09:00 - 10:00AM',
    '10:00 - 11:00AM',
    '11:00AM - 12:00PM',
    '12:00 - 01:00PM',
    '01:00 - 02:00PM',
    '02:00 - 03:00PM',
    '03:00 - 04:00PM',
    '04:00 - 05:00PM',
    '05:00 - 06:00PM',
    '06:00 - 07:00PM',
    '07:00 - 08:00PM',
    '08:00 - 09:00PM',
    '09:00 - 10:00PM',
    '10:00 - 11:00PM',
    '11:00 - 12:00AM'
  ];

  return dateArray.map((date, index) => (
    <div
      key={date}
      id={`day-${index}`}
      className={`flex-col overflow-x-hidden ${date === activeDay ? 'flex' : 'hidden'}`}
    >
      {hours.map((hour) => (
        <HourDroppable key={hour} hour={hour} />
      ))}
    </div>
  ));
};

export default CalendarDisplay;
