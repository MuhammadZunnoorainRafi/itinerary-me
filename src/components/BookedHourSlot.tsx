import { convertHourToAmPm } from '@itineract/lib/utils/convertHourToAmPm';

type BookedHourSlotProps = React.PropsWithChildren<{
  hour: string;
}>;

const BookedHourSlot: React.FC<BookedHourSlotProps> = ({ hour, children }) => {
  return (
    <div
      data-testid={`booked-hour-${hour}`}
      className="grid grid-cols-[80px_minmax(300px,_1fr)] grid-rows-[56px] place-items-start pt-1 border-t border-base-200"
    >
      <div className="w-20 font-sans text-secondary text-md leading-4 pl-4 self-center">
        {convertHourToAmPm(hour)}
      </div>
      {children}
    </div>
  );
};

export default BookedHourSlot;
