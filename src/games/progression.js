import runEngine from '../engine';
import generateRandomNumber from '../utils/random-number';

const progressionLength = 10;
const rangeNumbers = [0, 10];
const rangeSteps = [1, 10];
const rangeIndices = [0, progressionLength - 1];

const description = 'What number is missing in the progression?';

const createProgression = (start, length, step = 1) => Array(length)
  .fill(start)
  .map((item, i) => (item + i * step));

const generateQuestion = (start, step, index) => {
  const progression = createProgression(start, progressionLength, step);
  const progressionWithSpace = progression.map((item, i) => ((i === index) ? '..' : item));
  return progressionWithSpace.join` `;
};

const calcCorrectAnswer = (start, step, index) => start + step * index;

const generateRound = () => {
  const startNumber = generateRandomNumber(rangeNumbers);
  const randomStep = generateRandomNumber(rangeSteps);
  const randomIndex = generateRandomNumber(rangeIndices);
  const question = generateQuestion(startNumber, randomStep, randomIndex);
  const correctAnswer = calcCorrectAnswer(startNumber, randomStep, randomIndex);
  return [question, String(correctAnswer)];
};

const startBrainProgression = () => {
  runEngine(description, generateRound);
};

export default startBrainProgression;
