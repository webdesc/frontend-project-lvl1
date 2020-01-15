import runEngine from '../engine';
import generateRandomNumber from '../utils/random-number';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const range = [0, 20];

const rangeOperators = [0, operations.length];

const generateQuestion = () => {
  const number1 = generateRandomNumber(range);
  const number2 = generateRandomNumber(range);
  const operation = operations[generateRandomNumber(rangeOperators)];
  return `${number1} ${operation} ${number2}`;
};

const calcCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const getCorrectAnswer = (question) => {
  const [number1, operator, number2] = question.split(' ');
  const correctAnswer = calcCorrectAnswer(+number1, +number2, operator);
  return String(correctAnswer);
};

// TODO дублируется во всех играх
const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainCalc = () => {
  runEngine(description, generateRound);
};

export default startBrainCalc;
