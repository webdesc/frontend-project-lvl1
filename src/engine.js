import readLineSync from 'readline-sync';

const numberOfRounds = 3;

const engine = {
  run: (playerName, game) => {
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
  },
};

export default engine;
