import engine from '../engine';
import Generator from '../utils/generator';

const progressionLength = 10;

const calcCorrectAnswer = (progression) => {
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

const description = 'What number is missing in the progression?';

const generateQuestion = () => {
  const startNumber = Generator.randomNumber(progressionLength);
  const randomStep = Generator.randomNumber(progressionLength) + 1;
  const randomIndex = Generator.randomNumber(progressionLength - 1);
  return Generator.progression(startNumber, progressionLength, randomStep)
    .map((item, i) => ((i === randomIndex) ? '..' : item)).join` `;
};

const getCorrectAnswer = (question) => {
  const progression = question.split(' ').map((element) => ((element === '..') ? element : Number(element)));
  const correctAnswer = calcCorrectAnswer(progression);
  return String(correctAnswer);
};

const brainProgression = {
  start: () => {
    engine.run(description, generateQuestion, getCorrectAnswer);
  },
};

export default brainProgression;
