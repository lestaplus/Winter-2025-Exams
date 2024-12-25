// Refactor following solution
// Get day number

'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const DAY_OFFSET = 1;
const NOT_FOUND = -1;

const parseDay = (str) => {
  const index = DAYS.findIndex((day) => str.startsWith(day));
  return index !== NOT_FOUND ? index + DAY_OFFSET : NOT_FOUND;
}

module.exports = parseDay;
