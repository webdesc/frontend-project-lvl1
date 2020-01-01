import engine from '../engine';
import generator from '../utils/generator';

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
  const startNumber = generator.randomNumber(progressionLength);
  const randomStep = generator.randomNumber(progressionLength) + 1;
  const randomIndex = generator.randomNumber(progressionLength - 1);
  return generator.progression(startNumber, progressionLength, randomStep)
    .map((item, i) => ((i === randomIndex) ? '..' : item)).join` `;
};

const getCorrectAnswer = (question) => {
  const progression = question.split(' ').map((element) => ((element === '..') ? element : Number(element)));
  const correctAnswer = calcCorrectAnswer(progression);
  return String(correctAnswer);
};

const generateRound = () => {
  const question = generateQuestion();
  const correctAnswer = getCorrectAnswer(question);
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  engine.run(description, generateRound);
};

export default startBrainProgression;
