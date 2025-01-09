// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

'use strict';

const zip = function (a = [], b = []) {
  const result = [];
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    result.push([a[i], b[i]]);
  }
  return result;
};

module.exports = zip;
