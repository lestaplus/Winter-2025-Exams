// Refactor following solution
// Generate random integer value in given range

'use strict';

const random = (min, max) =>
  max === undefined
    ? Math.floor(Math.random() * (min + 1))
    : min + Math.floor(Math.random() * (max - min + 1));

module.exports = random;
