const dieRoll = () => {
  let die = Math.floor(Math.random() * 6) + 1;
  return die;
};

const setScore = () => {
  let dieCtrl = playPigDice();
  document.getElementById("diceBox").value = `Score: ${dieCtrl}`;
};

const playPigDice = () => {
  let score = 0;
  let gamesPlayed = 0;
  let die = dieRoll();
  while (die != 1) {
    gamesPlayed++;
    score += die;
    die = dieRoll();
  }
  highScore(gamesPlayed);
  return score;
};

const highScore = (gamesPlayed) => {
  document.getElementById("highscore").value = `Total games: ${gamesPlayed}`;
};
