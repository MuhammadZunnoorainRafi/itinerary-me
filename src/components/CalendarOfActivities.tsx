import { useCallback, useEffect, useState } from 'react';
// @ts-ignore
import { BookedActivity } from '@itineract/types/Activity';

import ActivityItem from './ActivityItem';
import Draggable from './Draggable';
import DroppableHourSlot from './DroppableHourSlot';
import BookedHourSlot from './BookedHourSlot';
import { DragOverlay } from '@dnd-kit/core';
import EditActivityForm from './activity/EditActivityForm';
import { EditNotifications } from '@mui/icons-material';
import { FaEdit } from 'react-icons/fa';

type CalendarOfActivitiesProps = {
  activities: Record<string, BookedActivity>;
  activeDay: string;
};

// const CalendarOfActivities: React.FC<CalendarOfActivitiesProps> = ({
//   activities,
//   activeDay
// }) => {
//   const [open, setOpen] = useState(false);
//   const hours = [
//     '06:00 - 07:00',
//     '07:00 - 08:00',
//     '08:00 - 09:00',
//     '09:00 - 10:00',
//     '10:00 - 11:00',
//     '11:00 - 12:00',
//     '12:00 - 13:00',
//     '13:00 - 14:00',
//     '14:00 - 15:00',
//     '15:00 - 16:00',
//     '16:00 - 17:00',
//     '17:00 - 18:00',
//     '18:00 - 19:00',
//     '19:00 - 20:00',
//     '20:00 - 21:00',
//     '21:00 - 22:00',
//     '22:00 - 23:00',
//     '23:00 - 00:00'
//   ];

//   // const [currentActivities, setCurrentActivities] =
//   //   useState<Record<string, BookedActivity>>(activities);
//   // useEffect(() => {
//   //   setCurrentActivities(activities);
//   // }, [activities]);
//   const getActivity = (hour: string) => {
//     // return activities.find((activity: any) => {
//     //   const activityStartTime = activity.startTime;
//     //   const topHour = hour.replace(/\s-\s.*/, '');
//     //   console.log({ topHour, activityStartTime });
//     //   return topHour.includes(activityStartTime);
//     // });
//     const topHour = hour.split(' - ')[0];

//     // Find the activity whose startTime matches the top hour exactly
//     const result = activities.find((activity: any) => {
//       const activityStartTime = activity.startTime;

//       // Compare start times directly for equality
//       return topHour === activityStartTime;
//     });
//     console.log({ result });

//     return result;
//   };
//   return (
//     <div
//       data-testid={`calendar`}
//       className={`flex flex-col z-40 overflow-y-scroll overscroll-y-contain`}
//     >
//       {hours.map((hour) => {
//         const activity = getActivity(hour);
//         return activity ? (
//           // return  (
//           <BookedHourSlot hour={hour} key={hour}>
//             <div className="group flex items-center justify-start gap-x-2">
//               <Draggable id={activity.id} key={activity.id}>
//                 <ActivityItem activity={activity} />
//               </Draggable>
//               <button
//                 className="group-hover:opacity-100 opacity-0 duration-200"
//                 onClick={() => setOpen(true)}
//               >
//                 <FaEdit size={25} color="#646285" />
//               </button>
//             </div>
//             <DragOverlay>
//               <ActivityItem activity={activity} />
//             </DragOverlay>
//             <EditActivityForm
//               activity={activity}
//               open={open}
//               setOpen={setOpen}
//             />
//           </BookedHourSlot>
//         ) : (
//           <DroppableHourSlot key={hour} hour={hour} />
//         );
//       })}
//     </div>
//   );
// };

// export default CalendarOfActivities;
const CalendarOfActivities: React.FC<CalendarOfActivitiesProps> = ({
  activities,
  activeDay
}) => {
  const [openActivityId, setOpenActivityId] = useState<string | null>(null);
  const hours = [
    '06:00 - 07:00',
    '07:00 - 08:00',
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00',
    '20:00 - 21:00',
    '21:00 - 22:00',
    '22:00 - 23:00',
    '23:00 - 00:00'
  ];

  const getActivity = (hour: string) => {
    const topHour = hour.split(' - ')[0];
    return activities.find((activity: any) => topHour === activity.startTime);
  };

  const arr = hours.map((hour) => {
    return { activity: getActivity(hour), hour };
  });
  // .filter((val) => val !== undefined);

  return (
    <div
      data-testid={`calendar`}
      className={`flex flex-col overflow-y-scroll overscroll-y-contain`}
    >
      {arr.map((val) => {
        // const activity = getActivity(hour);
        const { activity } = val;
        return activity ? (
          <BookedHourSlot hour={val.hour} key={activity.id}>
            <div className="group flex items-center justify-start gap-x-2">
              <Draggable id={activity.id} key={activity.id}>
                <ActivityItem activity={activity} />
              </Draggable>
              <button
                className="group-hover:opacity-100 opacity-0 duration-200"
                onClick={() => setOpenActivityId(activity.id)}
              >
                <FaEdit size={25} color="#646285" />
              </button>
            </div>

            {openActivityId === activity.id && (
              <EditActivityForm
                activity={activity}
                open={openActivityId === activity.id}
                setOpen={() => setOpenActivityId(null)}
              />
            )}
          </BookedHourSlot>
        ) : (
          <DroppableHourSlot key={val.hour} hour={val.hour} />
        );
      })}
    </div>
  );
};

export default CalendarOfActivities;
