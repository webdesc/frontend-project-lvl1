#!/usr/bin/env node

import startGame from '..';
import brainNod from '../games/brain-nod';

const game = brainNod();

startGame(game);
