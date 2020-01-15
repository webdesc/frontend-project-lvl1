import runEngine from '../engine';
import generateRandomNumber from '../utils/random-number';

const range = [1, 100];

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 2, sqrtNumber = Math.sqrt(number); i < sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateRound = () => {
  const question = generateRandomNumber(range);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startBrainPrime = () => {
  runEngine(description, generateRound);
};

export default startBrainPrime;
