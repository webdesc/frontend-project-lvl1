import Progression from '../utils/progression';

const primeNumbers = [11, 2, 17, 3, 6, 1, 7, 13, 17, 5];

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const progression = Progression.create(2, number - 2);
  return progression.every((element) => number % element !== 0);
};

const brainPrime = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no"',
  generateQuestion: () => primeNumbers[Math.floor(Math.random() * primeNumbers.length)] || null,
  validationAnswer: (question, answer) => {
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { correct: correctAnswer === answer, correctAnswer };
  },
};

export default brainPrime;
