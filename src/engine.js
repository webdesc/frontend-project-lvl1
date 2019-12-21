import readLineSync from 'readline-sync';

const numberOfRounds = 3;

const welcome = 'Welcome to the Brain Games!';

const getPlayerName = () => readLineSync.question('May I have your name? ');

const engine = {
  run: (description, generateQuestion, getCorrectAnswer) => {
    console.log(`${welcome}\n${description}\n`);
    const playerName = getPlayerName();
    if (playerName) {
      console.log(`Hello, ${playerName}!`);
      for (let i = 1; i <= numberOfRounds; i += 1) {
        const question = generateQuestion();
        const answer = readLineSync.question(`Question: ${question}\nYour answer: `);
        const correctAnswer = getCorrectAnswer(question);
        if (correctAnswer !== answer) {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
          return;
        }
        console.log('Correct!');
      }
      console.log(`Congratulations, ${playerName}`);
    }
  },
};

export default engine;
