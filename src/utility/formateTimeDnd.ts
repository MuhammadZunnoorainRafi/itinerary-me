export const formatTimeDnd = (overId: string, takeSpace: number) => {
  //   let overId = 'top-hour-07:00-08:00';

  // Extract the start time portion (07:00)
  let startTime = overId
    .replace('top-hour-', '') // Remove 'top-hour-'
    .replace(/-\d{2}:\d{2}/, ''); // Remove the end time (after the dash)

  let endTime = overId.replace('top-hour-', '').replace(/\d{2}:\d{2}-/, '');

  // Split the startTime into hours and minutes
  let [hours, minutes] = startTime.split(':');

  // Convert hours to a number and add 2
  let newHours = (parseInt(hours, 10) + takeSpace).toString().padStart(2, '0');

  // Format the new time (keeping the original minutes)
  let newEndTime = `${newHours}:${minutes}`;

  // Reformat the overId by replacing the old start time with the new one
  let newOverId = overId.replace(endTime, newEndTime);

  return newOverId; // Output: "top-hour-09:00-08:00"
};
