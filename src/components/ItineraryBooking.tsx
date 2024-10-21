'use client';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { useActivityDates } from '@itineract/hooks/useActivityDates';
import { Itinerary } from '@itineract/types/Itinerary';
import { useCallback, useEffect, useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import dayjs from 'dayjs';
import CalendarOfActivities from './CalendarOfActivities';
import DropDownActivities from './DropDownActivities';
import ItineraryTitle from './ItineraryTitle';
import UnbookedActivitiesList from './UnbookedActivitiesList';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import { formatTimeDnd } from '@itineract/utility/formateTimeDnd';

type ItineraryBookingProps = {
  itinerary: Itinerary;
};

const ItineraryBooking: React.FC<ItineraryBookingProps> = ({ itinerary }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [unbookedActivities, setUnbookedActivities] = useState(
    itinerary.activities.unbooked
  );
  const [bookedActivities, setBookedActivities] = useState(
    itinerary.activities.booked
  );

  const { dateArray, activeDay, setActiveDay } = useActivityDates(
    itinerary.startDate,
    itinerary.endDate
  );

  const { dispatch } = useItineraryContext();

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(e.active?.id as string);
    // console.log('drag start',e)
  };
  useEffect(() => {
    setUnbookedActivities(itinerary.activities.unbooked);
    setBookedActivities(itinerary.activities.booked);
  }, [itinerary.activities]);

  const handleDragEnd = useCallback(
    (e: DragEndEvent) => {
      const { over } = e;
      const overId = over?.id.toString();

      if (overId && overId.startsWith('top-hour-')) {
        const activityId = activeId as string;
        const activity = bookedActivities[activityId];

        if (activity) {
          // const newOverId = formatTimeDnd(overId, activity.takeSpace);
          const newOverId = formatTimeDnd(overId, activity.takeSpace);
          const newStartTime = newOverId
            .replace('top-hour-', '')
            .replace(/-\d{2}:\d{2}/, '');
          const newEndTime = newOverId
            .replace('top-hour-', '')
            .replace(/\d{2}:\d{2}-/, '');
          const isConflict = Object.values(bookedActivities).some(
            (bookedActivity) => {
              // Skip comparing with the same activity
              if (bookedActivity.id === activityId) return false;

              const bookedStartTime = bookedActivity.startTime;
              const bookedEndTime = bookedActivity.endTime;

              // Check if the new activity overlaps with any existing activity's time range
              return (
                (newStartTime >= bookedStartTime &&
                  newStartTime < bookedEndTime) || // Overlaps with the start of an existing activity
                (newEndTime > bookedStartTime && newEndTime <= bookedEndTime) || // Overlaps with the end of an existing activity
                (newStartTime <= bookedStartTime && newEndTime >= bookedEndTime) // Completely contains an existing activity
              );
            }
          );

          if (isConflict) {
            return; // Exit the function if a conflict is detected
          }

          const updatedBookedActivities = {
            ...bookedActivities,
            [activityId]: {
              ...activity,
              date: activeDay,
              startTime: newOverId
                .replace('top-hour-', '')
                .replace(/-\d{2}:\d{2}/, ''),
              endTime: newOverId
                .replace('top-hour-', '')
                .replace(/\d{2}:\d{2}-/, '')
            }
          };
          // console.log(updatedBookedActivities)
          setBookedActivities(updatedBookedActivities);
          setUnbookedActivities((prevUnbookedActivities) => {
            const { [activityId]: _, ...rest } = prevUnbookedActivities;
            return rest;
          });
          // setActiveId(null);
        } else {
          let unbookActivity = unbookedActivities[activityId];
          if (unbookActivity) {
            const newStartTime = overId
              .replace('top-hour-', '')
              .replace(/-\d{2}:\d{2}/, '');
            const newEndTime = overId
              .replace('top-hour-', '')
              .replace(/\d{2}:\d{2}-/, '');
            const isConflict = Object.values(bookedActivities).some(
              (bookedActivity) => {
                // Skip comparing with the same activity
                if (bookedActivity.id === activityId) return false;

                const bookedStartTime = bookedActivity.startTime;
                const bookedEndTime = bookedActivity.endTime;

                // Check if the new activity overlaps with any existing activity's time range
                return (
                  (newStartTime >= bookedStartTime &&
                    newStartTime < bookedEndTime) || // Overlaps with the start of an existing activity
                  (newEndTime > bookedStartTime &&
                    newEndTime <= bookedEndTime) || // Overlaps with the end of an existing activity
                  (newStartTime <= bookedStartTime &&
                    newEndTime >= bookedEndTime) // Completely contains an existing activity
                );
              }
            );

            if (isConflict) {
              return; // Exit the function if a conflict is detected
            }
            const updatedBookedActivities = {
              ...bookedActivities,
              [activityId]: {
                ...unbookActivity,
                date: activeDay,
                startTime: overId
                  .replace('top-hour-', '')
                  .replace(/-\d{2}:\d{2}/, ''),
                endTime: overId
                  .replace('top-hour-', '')
                  .replace(/\d{2}:\d{2}-/, '')
              }
            };
            // console.log(updatedBookedActivities)
            setBookedActivities(updatedBookedActivities);
            setUnbookedActivities((prevUnbookedActivities) => {
              const { [activityId]: _, ...rest } = prevUnbookedActivities;
              return rest;
            });
            // setActiveId(null);
          }
        }
      }
      if (overId && overId.startsWith('bottom-hour-')) {
        const activityId = activeId as string;
        const activity = unbookedActivities[activityId];
        if (activity) {
          const updatedBookedActivities = {
            ...bookedActivities,
            [activityId]: {
              ...activity,
              date: activeDay,
              startTime: overId
                .replace('bottom-hour-', '')
                .replace(/-\d{2}:\d{2}/, ''),
              endTime: overId
                .replace('bottom-hour-', '')
                .replace(/\d{2}:\d{2}-/, '')
            }
          };
          setBookedActivities(updatedBookedActivities);
          setUnbookedActivities((prevUnbookedActivities) => {
            const { [activityId]: _, ...rest } = prevUnbookedActivities;
            console.log(activityId, rest, prevUnbookedActivities);
            return rest;
          });
          // setActiveId(null);
        }
      }
      if (overId === 'unbooked') {
        const activityId = activeId as string;
        const activity = bookedActivities[activityId];
        if (activity) {
          const updatedBookedActivities = {
            ...unbookedActivities,
            [activityId]: {
              ...activity,
              date: activeDay,
              startTime: overId
                .replace('top-hour-', '')
                .replace(/-\d{2}:\d{2}/, ''),
              endTime: overId
                .replace('top-hour-', '')
                .replace(/\d{2}:\d{2}-/, ''),
              takeSpace: 1
            }
          };
          // console.log(updatedBookedActivities)
          setUnbookedActivities(updatedBookedActivities);
          setBookedActivities((prevBookedActivities) => {
            const { [activityId]: _, ...rest } = prevBookedActivities;
            return rest;
          });
          // setActiveId(null);
        }
      }
      if (
        !overId ||
        overId == undefined ||
        over == null
        // ||
        // overId == 'unbooked'
      ) {
        // console.log('unbook')
        // return false
        setBookedActivities({ ...bookedActivities });
        setUnbookedActivities({ ...unbookedActivities });
        // setActiveId(null)
      }
      console.log(`Dragged over ID: ${overId}, Active ID: ${activeId}`);
    },

    [activeDay, activeId, bookedActivities, unbookedActivities]
  );

  let activites = Object.values(bookedActivities).filter((val) => {
    if (val.date === activeDay) {
      return val;
    }
  });

  useEffect(() => {
    itinerary.activities.booked = bookedActivities;
    itinerary.activities.unbooked = unbookedActivities;
    const payload = itinerary;
    dispatch({ type: 'UPDATE_ITINERARY', payload });
  }, [bookedActivities, dispatch, itinerary, unbookedActivities]);
  return (
    <>
      <ItineraryTitle itinerary={itinerary} />
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <DropDownActivities>
          <UnbookedActivitiesList
            // @ts-ignore
            activities={unbookedActivities}
            activeActivityId={activeId}
          />
        </DropDownActivities>
        <TabGroup className="mt-2">
          <TabList className={'gap-x-1 flex'}>
            {dateArray.map((val) => (
              <Tab
                key={val}
                className="rounded-full px-3 text-[12px] text-black focus:outline-none data-[selected]:bg-blue/10 data-[hover]:bg-blue/5 data-[selected]:data-[hover]:bg-blue/10 data-[focus]:outline-1 data-[focus]:outline-blue data-[selected]:border data-[selected]:border-blue"
                onClick={() => setActiveDay(val)}
              >
                {dayjs(val).format('MMM D')}
              </Tab>
            ))}
            {/* <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab> */}
          </TabList>
          <TabPanels>
            {dateArray.map((val) => (
              <TabPanel key={val}>
                <CalendarOfActivities
                  // {...itinerary}
                  activities={activites}
                  activeDay={activeDay}
                />
              </TabPanel>
            ))}
            {/* <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel> */}
          </TabPanels>
        </TabGroup>
        {/* <DaysList
          dates={dateArray}
          activeDay={activeDay}
          setActiveDay={setActiveDay}
        />
        <CalendarOfActivities
          {...itinerary}
          activities={bookedActivities}
          activeDay={activeDay}
        /> */}
        {/* <CalendarOfActivities
          {...itinerary}
          activities={bookedActivities}
          activeDay={activeDay}
        /> */}
      </DndContext>
    </>
  );
};

export default ItineraryBooking;
