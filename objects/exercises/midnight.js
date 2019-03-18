/* We can use the number of minutes before or after midnight to represent the
time of day. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

The timeOfDay function below takes a time argument using this minute-based
format, and returns the time of day in 24-hour format ("hh:mm"). Reimplement
the function using JavaScript's Date object. */
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const day = new Date('March 13, 2019 00:00:00');
  day.setTime(day.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);

  return `${padWithZeroes(day.getHours(), 2)}:${padWithZeroes(day.getMinutes(), 2)}`;
}

// Examples:

timeOfDay(0); // "00:00"
timeOfDay(-3); // "23:57"
timeOfDay(35); // "00:35"
timeOfDay(-1437); // "00:03"
timeOfDay(3000); // "02:00"
timeOfDay(800); // "13:20"
timeOfDay(-4231); // "01:29"
// Note: Disregard Daylight Saving Time, Standard Time, and other complications.

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
//
// function timeOfDay(deltaMinutes) {
//   let hours;
//   let minutes;
//
//   deltaMinutes %= MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }
//
//   hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   minutes = deltaMinutes % MINUTES_PER_HOUR;
//
//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}
