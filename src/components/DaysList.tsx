'use client';

import dayjs from 'dayjs';

type DayItemProps = {
  date: string;
  active: boolean;
  onClick: () => void;
};

const DayItem: React.FC<DayItemProps> = ({ date, active, onClick }) => {
  const formattedDate = dayjs(date).format('MMM D');
  return (
    <div
      className={`flex-shrink-0 min-w-min rounded-full px-[13px] py-[10px] border ${active ? 'border-blue' : 'border-base-200'}`}
      id={`day-${date}`}
      data-testid="day"
      data-active={active}
      onClick={onClick}
      role="button"
    >
      <h2
        className={`flex font-poppins text-[13px] ${active ? 'text-blue font-semibold' : 'text-dark-blue font-semibold'}`}
      >
        {formattedDate}
      </h2>
    </div>
  );
};

type DaysListProps = {
  dates: string[];
  activeDay: string;
  setActiveDay: (date: string) => void;
};

const DaysList: React.FC<DaysListProps> = ({
  dates,
  activeDay,
  setActiveDay
}) => {
  return (
    <div className="flex flex-row gap-3 overflow-y-auto min-h-16 px-[16px] py-4 max-w-screen-md scrollbar ">
      {dates.map((date) => (
        <DayItem
          key={date}
          date={date}
          active={activeDay === date}
          onClick={() => setActiveDay(date)}
        />
      ))}
    </div>
  );
};

export default DaysList;
