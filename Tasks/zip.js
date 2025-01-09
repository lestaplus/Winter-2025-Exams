// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = (array1 = [], array2 = []) => {
  const result = [];
  for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    result.push([array1[i], array2[i]]);
  }
  return result;
};

module.exports = zip;
