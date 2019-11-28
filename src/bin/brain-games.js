#!/usr/bin/env node

import welcome from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"\n');

const username = welcome();

if (username) {
  console.log(`Hi ${username}!`);
}
