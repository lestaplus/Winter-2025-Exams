// Refactor following solution
// Generate random password

'use strict';

const generatePassword = (alphabet, length) => {
  const maxIndex = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    password += alphabet[randomIndex];
  }

  return password;
};

module.exports = generatePassword;
