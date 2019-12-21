import engine from '../engine';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const description = 'Answer "yes" if number even otherwise answer "no"';

const generateQuestion = () => numbers[Math.floor(Math.random() * numbers.length)] || null;

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (question) => {
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return correctAnswer;
};

const brainEven = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainEven;
