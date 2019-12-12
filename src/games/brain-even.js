export default () => {
  const numbers = [1, 2, 3, 4];
  return {
    description: 'Answer "yes" if number even otherwise answer "no"',
    generateQuestion: () => numbers[Math.floor(Math.random() * numbers.length)] || null,
    validationAnswer: (question, answer) => {
      const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
      return { correct: correctAnswer === answer, correctAnswer };
    },
  };
};
