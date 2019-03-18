// Create a variable named today with the current date and time as its value.

const today = new Date();

console.log(today);

/* Log a string, "Today's day is 5", that tells the current day of the week as
a number between 0 and 6 (Sunday is 0, Saturday is 6). Use the getDay method to
obtain the number of the day of week. */

console.log(`Today's day is ${today.getDay()}`);

/* The getDay method, like many of the get methods on the date object, returns
a zero-based index of the current day of week instead of the day name. This
enables support for multiple locales and formats. Modify the output message of
the previous problem to show the 3-letter day name abbreviation. You may use
the following array: */

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const indexOfWeek = today.getDay();

console.log(`Today's day is ${daysOfWeek[indexOfWeek]}`);

/* Let's add the calendar date (the day of month) to our log message: "Today's
date is Mon, the 6th". Use the getDate method to obtain the current day of
month. Don't worry about using different suffixes for numbers that end with
1, 2, or 3 just yet; we'll deal with that in the next problem. */

const day = daysOfWeek[indexOfWeek];
const date = today.getDate();
console.log(`Today's day is ${day}, the ${date}th.`);

/* Ideally, the suffix on the day number needs to adjust to the proper suffix
for days like the 1st, 22nd, and 3rd. Write a function named dateSuffix that
takes the day of month as a numeric value and returns the formatted day of month
and suffix. Make sure you use the correct suffixes. */

function dateSuffix(date) {
  const lastDigit = date % 10;
  let suffix = 'th';

  if (date < 11 && date > 20) {
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }

  return suffix;
}

console.log(`Today's day is ${day}, the ${date}${dateSuffix(date)}.`);

/* Change your output to include the value from the getMonth method. Thus, the
logged string will read "Today's date is Mon, 11 6th", where 11 is the month
number returned by getMonth. */
const month = today.getMonth();
let msg = `Today's day is ${day}, ${month} ${date}${dateSuffix(date)}.`;
console.log(msg);

/* Let's make the month readable. Using the same technique we used in problem 3,
convert the month number in the output string to a 3-letter month name
abbreviation. You may use the following array: */

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

msg = `Today's day is ${day}, ${months[month]} ${date}${dateSuffix(date)}.`;
console.log(msg);

/* Our call to console.log is getting cluttered. Let's clean things up a bit
and refactor the code into a few formatting functions that we can call from
anywhere in our code. Create formattedMonth and formattedDay functions to format
the month and day, then write a formattedDate function that pulls everything
together and logs the fully formatted date. */

function formattedDay(fullDate) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const indexOfWeek = fullDate.getDay();

  return daysOfWeek[indexOfWeek];
}

function formattedMonth(fullDate) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const indexOfMonth = fullDate.getMonth();

  return months[indexOfMonth];
}

function formattedDate(dateObj) {
  const month = formattedMonth(dateObj);
  const day = formattedDay(dateObj);
  const date = dateObj.getDate();

  const msg = `The day is ${day}, ${month} ${date}${dateSuffix(date)}.`;
  console.log(msg);
}

formattedDate(today);

/* Log the values returned from the getFullYear and getYear methods. Note how
these values differ. Note especially that getYear is deprecated: you should
avoid using deprecated methods as they may one day disappear. */

console.log(today.getFullYear());
console.log(today.getYear());

/* Use the getTime method and log the current date and time in total
milliseconds since Jan. 1st 1970. */

console.log(today.getTime());

/* Create a new date object variable named tomorrow that contains a Date object.
Initialize the variable by setting it to the value of today. You can get the
value of today using the getTime method. Next, change the date on the tomorrow
object to the day after today: you should use setDate to change the date.
Finally, log the tomorrow object with your formattedDate function. */

const tomorrow = new Date(today.getTime());
tomorrow.setDate(19);
formattedDate(tomorrow);

/* Create a new variable named nextWeek that is a new Date copied from the today
object. Compare nextWeek and today, and log the results. Are they equal?
Why or why not? */

const nextWeek = new Date(today.getTime());
console.log(nextWeek === today);

// they are not equal as they are both different objects. When JavaScript
// compares two objects, it doesn't compare the values they have stored; rather,
// it checks to see if one object is the other object. Only if both variables
// pointed to the same Date object would they be considered equal.

/* The === operator only returns true with Date objects if the objects are the
same object. Since we have two different objects (with the same values), we must
instead compare the values represented by those objects. Compare the values
returned by toDateString to determine whether the two objects are equal.
Finally, add 7 days to the nextWeek date and compare the two objects again. */

console.log(nextWeek.toDateString() === today.toDateString());
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString() === today.toDateString());

/* Finally, write a function named formatTime that takes a date object as an
argument and returns a string formatted with the hours and minutes as "15:30".
Make sure you handle the case where the hours or minutes has only one digit:
you need to pad the value with a leading zero in such cases, e.g., "03:04".
You can use the getHours and getMinutes methods to obtain the hours and minutes. */

function formatTime(dateObj) {
  let minutes = dateObj.getMinutes();
  let hours = dateObj.getHours();
  minutes = minutes < 10 ? `0${minutes}` : String(minutes);
  hours = hours < 10 ? `0${hours}` : String(hours);

  return `${hours}:${minutes}`;
}

console.log(formatTime(today));
console.log(formatTime(nextWeek));
