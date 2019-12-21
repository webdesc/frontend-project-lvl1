import engine from '../engine';

import Progression from '../utils/progression';

const primeNumbers = [11, 2, 17, 3, 6, 1, 7, 13, 17, 5];

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const progression = Progression.create(2, number - 2);
  return progression.every((element) => number % element !== 0);
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateQuestion = () => primeNumbers[
  Math.floor(Math.random() * primeNumbers.length)
] || null;

const getCorrectAnswer = (question) => {
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return correctAnswer;
};

const brainPrime = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainPrime;
