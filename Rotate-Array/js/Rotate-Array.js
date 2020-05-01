let genArray = new Array(5);

const generateRandom = () => {
  let randNbr = Math.floor(Math.random() * 100) + 1;
  return randNbr;
};

const fillArray = () => {
  let size = genArray.length;
  while (size < 5) {
    let nbr = generateRandom();
    genArray.push(nbr);
  }
};

const rotateRight = (genArray) => {};

const rotateLeft = (genArray) => {};
