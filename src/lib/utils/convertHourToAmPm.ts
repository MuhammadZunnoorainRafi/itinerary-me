function convertSingleTimeToAmPm(time: string, withAmPm = true) {
  let [hours, minutes] = time.split(':').map(Number);
  const ampm = withAmPm ? (hours >= 12 ? 'PM' : 'AM') : '';
  hours = hours % 12 || 12;

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}${ampm}`;
}

export function convertHourToAmPm(timeRange: string) {
  const [startTime, endTime] = timeRange.split(' - ');
  const start = convertSingleTimeToAmPm(startTime, false);
  const end = convertSingleTimeToAmPm(endTime);
  return `${start} - ${end}`;
}
