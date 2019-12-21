import engine from '../engine';
import Generator from '../utils/generator';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const description = 'Answer "yes" if number even otherwise answer "no"';

const generateQuestion = () => numbers[Generator.randomNumber(numbers.length)];

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const brainEven = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainEven;
