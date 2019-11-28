#!/usr/bin/env node

import { welcome, start } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"\n');

const playerName = welcome();

if (playerName) {
  console.log(`Hello, ${playerName}!`);
  start(playerName);
}
