import readLineSync from 'readline-sync';
import engine from './engine';

const welcome = () => readLineSync.question('May I have your name? ');

const startGame = (game) => {
  console.log(`Welcome to the Brain Games!\n${game.description}\n`);

  const playerName = welcome();

  if (playerName) {
    engine.run(playerName, game);
  }
};

export default startGame;
