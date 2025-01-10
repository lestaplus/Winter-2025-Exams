// Refactor following solution
// Split string into array by the first occurrence of separator

'use strict';

const sectionOfString = (str, separator) => {
  const index = str.indexOf(separator);
  const firstPart = str.slice(0, index);
  const secondPart = str.slice(index + separator.length);
  return separator && str.includes(separator)
    ? [firstPart, secondPart]
    : [str, ''];
};

module.exports = sectionOfString;
