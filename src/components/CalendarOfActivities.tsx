import { useState } from 'react';
// @ts-ignore
import { BookedActivity } from '@itineract/types/Activity';

import { FaEdit } from 'react-icons/fa';
import EditActivityForm from './activity/EditActivityForm';
import ActivityItem from './ActivityItem';
import BookedHourSlot from './BookedHourSlot';
import Draggable from './Draggable';
import DroppableHourSlot from './DroppableHourSlot';

type CalendarOfActivitiesProps = {
  activities: Record<string, BookedActivity>;
  activeDay: string;
};

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

  return (
    <div
      data-testid={`calendar`}
      className={`flex flex-col overflow-y-visible`}
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
                className="group-hover:opacity-100 opacity-0 duration-200 relative z-10"
                onClick={() => setOpenActivityId(activity.id)}
              >
                <FaEdit size={25} color="#646285" />
              </button>
            </div>

            {openActivityId === activity.id && (
              <EditActivityForm
                activity={activity}
                activeDay={activeDay}
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

// const CalendarOfActivities: React.FC<CalendarOfActivitiesProps> = ({
//   activities,
//   activeDay
// }) => {
//   const [openActivityId, setOpenActivityId] = useState<string | null>(null);

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

//   // Convert time to date object for comparison
//   const timeToDate = (time: string) => {
//     const [hours, minutes] = time.split(':').map(Number);
//     const date = new Date();
//     date.setHours(hours);
//     date.setMinutes(minutes);
//     return date;
//   };

//   // Check if the activity overlaps with the given slot
//   const doesActivityFitSlot = (
//     activity: any,
//     slotStart: Date,
//     slotEnd: Date
//   ) => {
//     const activityStart = timeToDate(activity.startTime);
//     const activityEnd = timeToDate(activity.endTime);

//     // Check if activity overlaps with the slot
//     return (
//       (activityStart >= slotStart && activityStart < slotEnd) || // Activity starts during the slot
//       (activityEnd > slotStart && activityEnd <= slotEnd) || // Activity ends during the slot
//       (activityStart <= slotStart && activityEnd >= slotEnd) // Activity spans across the entire slot
//     );
//   };

//   // Get activity that fits within a specific time slot
//   const getActivityForSlot = (hour: string) => {
//     const [startStr, endStr] = hour.split(' - ');
//     const slotStart = timeToDate(startStr);
//     const slotEnd = timeToDate(endStr);

//     return activities.find((activity: any) =>
//       doesActivityFitSlot(activity, slotStart, slotEnd)
//     );
//   };

//   const slots = hours.map((hour) => {
//     return { activity: getActivityForSlot(hour), hour };
//   });

//   return (
//     <div
//       data-testid={`calendar`}
//       className={`flex flex-col overflow-y-scroll overscroll-y-contain`}
//     >
//       {slots.map((val) => {
//         const { activity, hour } = val;

//         return activity ? (
//           <BookedHourSlot hour={hour} key={activity.id}>
//             <div className="group flex items-center justify-start gap-x-2">
//               {/* Draggable activity */}
//               <Draggable id={activity.id} key={activity.id}>
//                 <ActivityItem activity={activity} />
//               </Draggable>

//               <button
//                 className="group-hover:opacity-100 opacity-0 duration-200"
//                 onClick={() => setOpenActivityId(activity.id)}
//               >
//                 <FaEdit size={25} color="#646285" />
//               </button>
//             </div>

//             {/* Edit form modal */}
//             {openActivityId === activity.id && (
//               <EditActivityForm
//                 activity={activity}
//                 open={openActivityId === activity.id}
//                 setOpen={() => setOpenActivityId(null)}
//               />
//             )}
//           </BookedHourSlot>
//         ) : (
//           // Droppable slot for empty time slots
//           <DroppableHourSlot key={hour} hour={hour} />
//         );
//       })}
//     </div>
//   );
// };

export default CalendarOfActivities;
