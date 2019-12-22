import engine from '../engine';
import Generator from '../utils/generator';

const primeNumbers = [11, 2, 17, 3, 6, 1, 7, 13, 17, 5, 239, 1321, 3559, 100000000];

const isPrime = (number) => {
  for (let i = 2, sqrtNumber = Math.sqrt(number); i < sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// const isPrime = (number) => {
//   const numbers = Generator.progression(2, Math.floor(Math.sqrt(number)));
//   return !numbers.some((item) => number % item === 0);
// };

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const generateQuestion = () => primeNumbers[Generator.randomNumber(primeNumbers.length)];

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const brainPrime = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainPrime;
