import runEngine from '../engine';
import generator from '../utils/generator';

const progressionLength = 10;

const description = 'What number is missing in the progression?';

const createProgression = (start, length, step = 1) => Array(length)
  .fill(start)
  .map((item, i, arr) => ((i === 0) ? item : arr[i - 1] + (step * i)));

const generateQuestion = (start, step, index) => {
  const progression = createProgression(start, progressionLength, step);
  return progression.map((item, i) => ((i === index) ? '..' : item)).join` `;
};

const calcCorrectAnswer = (start, step, index) => start + step * index;

const generateRound = () => {
  const startNumber = generator.randomNumber([0, progressionLength]);
  const randomStep = generator.randomNumber([0, progressionLength]) + 1;
  const randomIndex = generator.randomNumber([0, progressionLength - 1]);
  const question = generateQuestion(startNumber, randomStep, randomIndex);
  const correctAnswer = calcCorrectAnswer(startNumber, randomStep, randomIndex);
  return [question, String(correctAnswer)];
};

const startBrainProgression = () => {
  runEngine(description, generateRound);
};

export default startBrainProgression;
