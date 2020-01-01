import engine from '../engine';
import generator from '../utils/generator';

const range = 100;

const getGcd = (a, b) => ((b === 0) ? a : getGcd(b, a % b));

const description = 'Find the greatest common divisor of given number';

const generateQuestion = () => {
  const number1 = generator.randomNumber(range);
  const number2 = generator.randomNumber(range);
  return `${number1} ${number2}`;
};

const getCorrectAnswer = (question) => {
  const [first, second] = question.split(' ');
  const correctAnswer = getGcd(first, second);
  return String(correctAnswer);
};

const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainGcd = () => {
  engine.run(description, generateRound);
};

export default startBrainGcd;
