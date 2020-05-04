let generatedArray = new Array();
let newArray = new Array();
let shiftedArray = new Array();
let totalRotations = 0;

class ArraysCollection {
  value;

  print() {
    console.log(this.value);
  }

  constructor(value) {
    this.value = value;
  }
}

let items = [];

const generateRandom = () => {
  let randNbr = Math.floor(Math.random() * 100) + 1;
  return randNbr;
};

const fillArray = () => {
  for (let size = 0; size < 3; size++) {
    let nbr = generateRandom();
    generatedArray.push(nbr);
  }
  let newArray = new ArraysCollection(generatedArray);
  items.push(newArray);
  display(newArray);
};

const display = (array) => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  let tr = `<tr><td>${array.toString}</td></tr>`;
  tbody.innerHTML += tr;
  // for (let item of items) {
  //   let tr = `<tr><td>${item.value}</td></tr>`;
  //   tbody.innerHTML += tr;
  // }
};

const reset = () => {
  generatedArray = [];
  newArray = [];
  items = [];
  tbody.innerHTML = "";
};

const rotateRight = (genArray) => {
  let tempHold1;
  tempHold1 = newArray[0];
  for (let idx = 1; idx < newArray.length; idx++) {
    shiftedArray.push(newArray[idx]);
    console.log(idx);
  }
  shiftedArray.push(tempHold1);
  // genArray = genArray.shift();
  // genArray.push(tempHold1);
  // newestArray.push(genArray);
  totalRotations++;
  display(shiftedArray);
};

const rotateLeft = (genArray) => {
  totalRotations++;
};
