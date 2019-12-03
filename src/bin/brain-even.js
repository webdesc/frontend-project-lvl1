#!/usr/bin/env node

import startGame from '..';
import brainEven from '../games/brain-even';

const game = brainEven();

startGame(game);
