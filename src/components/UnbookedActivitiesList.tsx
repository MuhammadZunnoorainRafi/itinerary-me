'use client';
import { Itinerary } from '@itineract/types/Itinerary';
import ActivityItem from './ActivityItem';
import Draggable from './Draggable';
import { DragOverlay, useDroppable, useDraggable } from '@dnd-kit/core';
import AddActivityModal from './activity/AddActivityModal';
import { useParams } from 'next/navigation';

type UnbookedActivitiesListProps = {
  activeActivityId: string | null;
  activities: Record<string, Itinerary>;
};
type Params = {
  id: string;
};
const UnbookedActivitiesList: React.FC<UnbookedActivitiesListProps> = ({
  activeActivityId,
  activities
}) => {
  const params = useParams() as Params;

  const { isOver, setNodeRef } = useDroppable({
    id: 'unbooked'
  });
  // const {isDragging} = useDraggable({
  //   id: activeActivityId as string
  // })
  // const opacity = isDragging ? 1 : 1;

  const activityKeys = Object.keys(activities);
  const activitiesLength = activityKeys.length;
  return (
    <>
      <div className="flex flex-col gap-2 bg-medium-blue px-3 py-4 shadow-inner shadow-black/25">
        <div
          ref={setNodeRef}
          data-testid="unbooked-activities"
          id="unbooked"
          className={`flex flex-row gap-2  items-center overflow-x-auto scroll-smooth pb-2 scrollbar ${isOver ? 'bg-base-100' : 'bg-medium-blue'}`}
        >
          {activityKeys.map((activityId, index) => {
            const activity = activities[activityId];
            // console.log(activity)
            return (
              <div key={activityId}>
                <Draggable id={activityId}>
                  <ActivityItem
                    activity={activity}
                    // isLast={index === activitiesLength - 1}
                    // opacity={opacity}
                  />
                </Draggable>

                <DragOverlay>
                  {activeActivityId && activeActivityId === activityId ? (
                    <ActivityItem activity={activity} />
                  ) : null}
                </DragOverlay>
              </div>
            );
          })}
          <div
            className={` ml-2 min-h-[50px] flex  items-center justify-center flex-row flex-nowrap bg-[#EDEDED]  min-w-60 p-1 rounded-lg content-center cursor-pointer`}
          >
            <AddActivityModal id={params.id} />
          </div>
        </div>
        <div className="mb-2">
          <p className="text-gray-200 text-md">
            Drag your activity to any of your preferred time
          </p>
        </div>
      </div>
    </>
  );
};

export default UnbookedActivitiesList;
