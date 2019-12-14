const numbers = [1, 3, 20, 12, 8, 84, 93, 11, 4, 97, 21, 6];

const operations = ['+', '-', '*'];

const getCorrectAnswer = (number1, number2, operator) => {
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

const brainCalc = {
  description: 'What is the result of the expression?',
  generateQuestion: () => {
    const number1 = numbers[Math.floor(Math.random() * numbers.length)];
    const number2 = numbers[Math.floor(Math.random() * numbers.length)];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    return `${number1} ${operation} ${number2}`;
  },
  validationAnswer: (question, answer) => {
    const [number1, operator, number2] = question.split(' ');
    const correctAnswer = getCorrectAnswer(Number(number1), Number(number2), operator);
    return { correct: correctAnswer === +answer, correctAnswer };
  },
};

export default brainCalc;
