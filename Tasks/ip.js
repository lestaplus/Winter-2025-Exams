// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const parseIP = (input) => {
  if (!input) return;
  const result = [];
    const parts = input.split('.');
    if (parts.length != 4) return;
    let index = 0;
    for (const part of parts) {
      result[index] = parseInt(part);
      if (isNaN(result[index])) return;
      index++;
    }
  return result;
};

module.exports = parseIP;
