#!/usr/bin/env node

import startGame from '..';
import brainCalc from '../games/brain-calc';

const game = brainCalc();

startGame(game);
