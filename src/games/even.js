import engine from '../engine';
import generator from '../utils/generator';

const range = 1000;

const description = 'Answer "yes" if number even otherwise answer "no"';

const generateQuestion = () => generator.randomNumber(range);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainEven = () => {
  engine.run(description, generateRound);
};

export default startBrainEven;
