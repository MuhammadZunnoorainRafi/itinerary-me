'use client';

import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Draggable from '@itineract/components/Draggable';
import Droppable from '@itineract/components/Droppable';
import { useState } from 'react';

export default function BookingPage() {
  const containers = ['unbooked', 'booked'];
  const [unbookedActivities, setUnbookedActivities] = useState([
    {
      id: 'test-activity-1',
      name: 'Activity 1'
    },
    {
      id: 'test-activity-2',
      name: 'Activity 2'
    },
    {
      id: 'test-activity-3',
      name: 'Activity 3'
    }
  ]);
  const [bookedActivities, setBookedActivities] = useState<
    Array<{ id: string; name: string }>
  >([]);

  const handleDragEnd = (e: DragEndEvent) => {
    const { over } = e;
    if (!over) return;
    if (over.id === 'unbooked') {
      const activity = bookedActivities.find((a) => a.id === e.active.id);
      if (!activity) return;
      setBookedActivities((bookedActivities) =>
        bookedActivities.filter((a) => a.id !== e.active.id)
      );
      setUnbookedActivities((unbookedActivities) => [
        ...unbookedActivities,
        activity
      ]);
      return;
    }
    if (over.id === 'booked') {
      const activity = unbookedActivities.find((a) => a.id === e.active.id);
      if (!activity) return;
      setUnbookedActivities((unbookedActivities) =>
        unbookedActivities.filter((a) => a.id !== e.active.id)
      );
      setBookedActivities((bookedActivities) => [
        ...bookedActivities,
        activity
      ]);
      return;
    }
  };

  const draggableMarkup = ({ id, name }: { id: string; name: string }) => (
    <Draggable id={id}>{name}</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {containers.map((containerId) => (
        <Droppable key={containerId} id={containerId}>
          {containerId === 'unbooked'
            ? unbookedActivities.map(draggableMarkup)
            : bookedActivities.map(draggableMarkup)}
        </Droppable>
      ))}
    </DndContext>
  );
}
