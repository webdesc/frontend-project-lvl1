import engine from '../engine';
import Generator from '../utils/generator';

const numbers = [25, 100, 52, 4];

const getGcd = (a, b) => ((b === 0) ? a : getGcd(b, a % b));

const description = 'Find the greatest common divisor of given number';

const generateQuestion = () => {
  const number1 = numbers[Generator.randomNumber(numbers.length)];
  const number2 = numbers[Generator.randomNumber(numbers.length)];
  return `${number1} ${number2}`;
};

const getCorrectAnswer = (question) => {
  const [first, second] = question.split(' ');
  const correctAnswer = getGcd(first, second);
  return String(correctAnswer);
};

const brainGcd = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainGcd;
