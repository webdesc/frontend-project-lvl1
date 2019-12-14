const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const brainEven = {
  description: 'Answer "yes" if number even otherwise answer "no"',
  generateQuestion: () => numbers[Math.floor(Math.random() * numbers.length)] || null,
  validationAnswer: (question, answer) => {
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    return { correct: correctAnswer === answer, correctAnswer };
  },
};

export default brainEven;
