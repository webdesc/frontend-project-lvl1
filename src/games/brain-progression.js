import Progression from '../utils/progression';

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


const brainProgression = {
  description: 'What number is missing in the progression?',
  generateQuestion: () => {
    const randomStep = generateRandomNumber(progressionLength);
    const randomIndex = generateRandomNumber(progressionLength) - 1;
    return Progression.create(randomStep, progressionLength, randomStep)
      .map((item, i) => ((i === randomIndex) ? '..' : item)).join` `;
  },
  validationAnswer: (question, answer) => {
    const progression = question.split(' ').map((element) => ((element === '..') ? element : Number(element)));
    const correctAnswer = getCorrectAnswer(progression);
    return { correct: correctAnswer === +answer, correctAnswer };
  },
};

export default brainProgression;
