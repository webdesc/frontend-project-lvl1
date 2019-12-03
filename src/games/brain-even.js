export default () => {
  const numbers = [1, 2, 3, 4];
  return {
    generateQuestion: () => numbers[Math.floor(Math.random() * numbers.length)] || null,
    getCorrectAnswer: (question, answer) => {
      if (question % 2 === 0 && answer === 'no') {
        return 'yes';
      }
      if (question % 2 !== 0 && answer === 'yes') {
        return 'no';
      }
      return null;
    },
  };
};
