import runEngine from '../engine';
import generateRandomNumber from '../utils/random-number';

const range = [0, 1000];

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(range);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startBrainEven = () => {
  runEngine(description, generateRound);
};

export default startBrainEven;
