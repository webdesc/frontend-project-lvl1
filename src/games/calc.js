import engine from '../engine';
import generator from '../utils/generator';

const description = 'What is the result of the expression?';

const range = 20;

const operations = ['+', '-', '*'];

const generateQuestion = () => {
  const number1 = generator.randomNumber(range);
  const number2 = generator.randomNumber(range);
  const operation = operations[Math.floor(Math.random() * operations.length)];
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
  engine.run(description, generateRound);
};

export default startBrainCalc;
