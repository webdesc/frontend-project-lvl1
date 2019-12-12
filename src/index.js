import readLineSync from 'readline-sync';

const welcome = () => readLineSync.question('May I have your name? ');

const numberOfRounds = 3;

const startGame = (game) => {
  console.log(`Welcome to the Brain Games!\n${game.description}\n`);

  const playerName = welcome();

  if (playerName) {
    console.log(`Hello, ${playerName}!`);
    for (let i = 1; i <= numberOfRounds; i += 1) {
      const question = game.generateQuestion();
      const answer = readLineSync.question(`Question: ${question}\nYour answer: `);
      const resultValidation = game.validationAnswer(question, answer);
      if (!resultValidation.correct) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${resultValidation.correctAnswer}.`);
        return;
      }
      console.log('Correct!');
    }

    console.log(`Congratulations, ${playerName}`);
  }
};

export default startGame;
