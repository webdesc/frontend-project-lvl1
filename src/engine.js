import readLineSync from 'readline-sync';

const numberOfRounds = 3;

const welcome = 'Welcome to the Brain Games!';

const runEngine = (description, generateRound) => {
  console.log(welcome);
  console.log(description);
  const playerName = readLineSync.question('May I have your name? ');
  if (playerName) {
    console.log(`Hello, ${playerName}!`);
    for (let i = 1; i <= numberOfRounds; i += 1) {
      const [question, correctAnswer] = generateRound();
      console.log(`Question: ${question}`);
      const playerAnswer = readLineSync.question('Your answer: ');
      if (correctAnswer !== playerAnswer) {
        console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${playerName}`);
  }
};

export default runEngine;
