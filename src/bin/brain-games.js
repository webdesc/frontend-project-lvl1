#!/usr/bin/env node

import welcome from '..';

console.log('Welcome to the Brain Games!');

const username = welcome();

if (username) {
  console.log(`Hi ${username}!`);
}
