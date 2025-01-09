// Refactor following solution
// Count types in an array

'use strict';

const types = (array) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const element of array) {
    const elementType = typeof element;
    result[elementType]++;
  }
  return result;
};

module.exports = types;
