const numbers = [25, 100, 52, 4];

const getGcd = (a, b) => {
  if (a > b) {
    return (a % b) ? getGcd((a % b), b) : b;
  }
  return (b % a) ? getGcd(a, (b % a)) : a;
};

const brainGcd = {
  description: 'Find the greatest common divisor of given number',
  generateQuestion: () => {
    const number1 = numbers[Math.floor(Math.random() * numbers.length)];
    const number2 = numbers[Math.floor(Math.random() * numbers.length)];
    return `${number1} ${number2}`;
  },
  validationAnswer: (question, answer) => {
    const [first, second] = question.split(' ');
    const correctAnswer = getGcd(first, second);
    return { correct: +correctAnswer === +answer, correctAnswer };
  },
};

export default brainGcd;
