import readLineSync from 'readline-sync';

const welcome = () => readLineSync.question('May I have your name? ');

const start = (playerName) => {
  const numbers = [1, 2, 3, 4];

  let countCorrectAnswers = 0;

  const checkCorrectAnswer = (number, answer) => {
    if (number % 2 === 0 && answer === 'yes') {
      return true;
    }
    if (number % 2 !== 0 && answer === 'no') {
      return true;
    }
    return false;
  };

  for (let i = 0, lenghtNumbers = numbers.length; i < lenghtNumbers; i += 1) {
    if (countCorrectAnswers === 3) {
      console.log(`Congratulations, ${playerName}`);
      return;
    }
    const answer = readLineSync.question(`Question: ${numbers[i]}\nYour answer: `);
    if (!checkCorrectAnswer(numbers[i], answer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${(answer === 'yes' ? 'no' : 'yes')}.`);
      return;
    }
    console.log('Correct!');
    countCorrectAnswers += 1;
  }
};

export { welcome, start };
