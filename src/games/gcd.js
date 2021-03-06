import runEngine from '../engine';
import generateRandomNumber from '../utils/random-number';

const range = [1, 100];

const getGcd = (a, b) => ((b === 0) ? a : getGcd(b, a % b));

const description = 'Find the greatest common divisor of given number';

const generateQuestion = () => {
  const number1 = generateRandomNumber(range);
  const number2 = generateRandomNumber(range);
  return `${number1} ${number2}`;
};

const getCorrectAnswer = (question) => {
  const [first, second] = question.split(' ');
  const correctAnswer = getGcd(+first, +second);
  return String(correctAnswer);
};

const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainGcd = () => {
  runEngine(description, generateRound);
};

export default startBrainGcd;
