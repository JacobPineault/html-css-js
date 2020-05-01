const dieRoll = () => {
  let die = Math.floor(Math.random() * 6) + 1;
  return die;
};

const setScore = () => {
  let dieCtrl = playPigDice();
  document.getElementById("diceBox").value = dieCtrl;
};

const playPigDice = () => {
  let score = 0;
  let die = dieRoll();
  while (die != 1) {
    score += die;
    die = dieRoll();
  }
  return score;
};
