// Refactor following solution
// Split string by the first occurrence of separator

'use strict';

const IP_PARTS_COUNT = 4;

const parseIP = (input) => {
  if (!input) return;

  const result = [];
  const parts = input.split('.');
  if (parts.length !== IP_PARTS_COUNT) return;

  for (const part of parts) {
    const number = parseInt(part, 10);
    if (isNaN(number)) return;
    result.push(number);
  }

  return result;
};

module.exports = parseIP;
