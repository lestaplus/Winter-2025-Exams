// Refactor following solution
// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (str) => {
  const index = DAYS.findIndex((day) => str.startsWith(day));
  return index !== -1 ? index + 1 : -1;
}

module.exports = parseDay;
