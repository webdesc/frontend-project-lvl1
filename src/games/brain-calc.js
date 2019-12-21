import engine from '../engine';

const description = 'What is the result of the expression?';

const numbers = [1, 3, 20, 12, 8, 84, 93, 11, 4, 97, 21, 6];

const operations = ['+', '-', '*'];

const generateQuestion = () => {
  const number1 = numbers[Math.floor(Math.random() * numbers.length)];
  const number2 = numbers[Math.floor(Math.random() * numbers.length)];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  return `${number1} ${operation} ${number2}`;
};

const calcCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return Number(number1) + Number(number2);
    case '-':
      return Number(number1) - Number(number2);
    case '*':
      return Number(number1) * Number(number2);
    default:
      return null;
  }
};

const getCorrectAnswer = (question) => {
  const [number1, operator, number2] = question.split(' ');
  const correctAnswer = calcCorrectAnswer(number1, number2, operator);
  return String(correctAnswer);
};

const brainCalc = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainCalc;
