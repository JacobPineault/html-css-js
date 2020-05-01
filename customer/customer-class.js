class Customer {
  id;
  name;
  state;

  print() {
    console.log(this.id, this.name, this.state);
  }

  constructor(id, name, state) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}

let cust1 = new Customer(1, "Amazon", "WA");
let cust2 = new Customer(2, "Target", "MN");
let cust3 = new Customer(3, "Walmart", "AR");

let custs = [cust1, cust2, cust3];

const loaded = () => {
  display();
};
// new instance of cust + add -> display new list
const add = () => {
  // let id = parseInt(value) or Number(value)
  let id = +document.getElementById("tid").value;
  let name = document.getElementById("tname").value;
  let state = document.getElementById("tstate").value;
  let cust = new Customer(id, name, state);
  custs.push(cust);
  display();
};

const display = () => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // clear old data
  for (let cust of custs) {
    let tr = `<tr><td>${cust.id}</td><td>${cust.name}</td><td>${cust.state}</td></tr>`;
    tbody.innerHTML += tr;
  }
};
