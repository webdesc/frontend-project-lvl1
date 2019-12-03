export default () => {
  const numbers = [1, 3, 20, 12, 8, 84, 93, 11, 4, 97, 21, 6];
  const operations = ['+', '-', '*'];
  return {
    generateQuestion: () => {
      const number1 = numbers[Math.floor(Math.random() * numbers.length)];
      const number2 = numbers[Math.floor(Math.random() * numbers.length)];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      return `${number1} ${operation} ${number2}`;
    },
    getCorrectAnswer: (question, answer) => {
      const [number1, operator, number2] = question.split(' ');
      let result;
      switch (operator) {
        case '+':
          result = +number1 + +number2; break;
        case '-':
          result = number1 - number2; break;
        case '*':
          result = number1 * number2; break;
        default:
          return null;
      }
      return (result === +answer) ? null : result;
    },
  };
};
