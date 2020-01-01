import engine from '../engine';
import generator from '../utils/generator';

const range = 100;

const isPrime = (number) => {
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

const generateQuestion = () => generator.randomNumber(range);

const getCorrectAnswer = (question) => (isPrime(question) ? 'yes' : 'no');

const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainPrime = () => {
  engine.run(description, generateRound);
};

export default startBrainPrime;
