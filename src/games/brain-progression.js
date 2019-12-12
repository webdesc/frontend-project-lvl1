export default () => {
  const progressionLength = 10;

  const generateRandomNumber = (range) => Math.floor(Math.random() * range) + 1;

  const getCorrectAnswer = (progression) => {
    const i = progression.indexOf('..');
    switch (i) {
      case 0:
        return progression[i + 1] - (progression[i + 2] - progression[i + 1]);
      case progression.length - 1:
        return progression[i - 1] + (progression[i - 1] - progression[i - 2]);
      default:
        return progression[i - 1] + ((progression[i + 1] - progression[i - 1]) / 2);
    }
  };

  return {
    description: 'What number is missing in the progression?',
    generateQuestion: () => {
      const randomStep = generateRandomNumber(progressionLength);
      const randomIndex = generateRandomNumber(progressionLength) - 1;
      return Array(progressionLength)
        .fill(randomStep)
        .reduce((acc, curr, index) => [...acc, (index === randomIndex) ? '..' : curr * index + randomStep], [])
        .join` `;
    },
    validationAnswer: (question, answer) => {
      const progression = question.split(' ').map((element) => ((element === '..') ? element : Number(element)));
      const correctAnswer = getCorrectAnswer(progression);
      return { correct: correctAnswer === +answer, correctAnswer };
    },
  };
};
