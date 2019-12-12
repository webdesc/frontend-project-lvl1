#!/usr/bin/env node

import startGame from '..';
import brainProgression from '../games/brain-progression';

const game = brainProgression();

startGame(game);
