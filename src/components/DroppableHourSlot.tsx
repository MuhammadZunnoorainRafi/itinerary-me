import { useDroppable } from '@dnd-kit/core';
import { convertHourToAmPm } from '@itineract/lib/utils/convertHourToAmPm';
import React from 'react';

type DroppableHalfHourProps = {
  hour: string;
  topHour?: boolean;
};

const DroppableHalfHour: React.FC<DroppableHalfHourProps> = ({
  hour,
  topHour = false
}) => {
  const kebabHourPeriod = hour.replaceAll(' ', '');
  const { isOver, setNodeRef } = useDroppable({
    id: topHour
      ? `top-hour-${kebabHourPeriod}`
      : `bottom-hour-${kebabHourPeriod}`
  });

  return (
    <div
      ref={setNodeRef}
      data-testid="droppable-half-hour"
      className={`flex-grow bg-base-100 h-auto ${topHour ? 'border-b border-base-200 border-dashed' : ''} ${isOver ? 'bg-info' : ''}`}
    />
  );
};

type DroppableHourSlotProps = {
  hour: string;
};

const DroppableHourSlot: React.FC<DroppableHourSlotProps> = ({ hour }) => {
  return (
    <div
      data-testid="droppable-hour"
      className="flex flex-row border-t border-base-200 items-center snap-center h-14"
    >
      <div className="w-20 font-sans text-secondary text-md leading-4 pl-4">
        {convertHourToAmPm(hour)}
      </div>
      <div className="flex flex-col grow">
        <DroppableHalfHour hour={hour} topHour />
        <DroppableHalfHour hour={hour} />
      </div>
    </div>
  );
};

export default DroppableHourSlot;
