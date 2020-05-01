const numCtrl = (nbr) => {
  let nbrCtrl = document.getElementById("textbox");
  nbrCtrl.style.color = nbr % 2 === 0 ? "red" : "black";
  nbrCtrl.style.fontStyle = nbr % 3 === 0 ? "italic" : "normal";
  nbrCtrl.style.fontWeight = nbr % 7 === 0 ? "bold" : "normal";
};

const decButton = () => {
  let nbr = parseInt(document.getElementById("textbox").value);
  nbr--;
  numCtrl(nbr);
  document.getElementById("textbox").value = nbr;
};

const incButton = () => {
  let nbr = parseInt(document.getElementById("textbox").value);
  nbr++;
  numCtrl(nbr);
  document.getElementById("textbox").value = nbr;
};

const reset = () => {
  document.getElementById("textbox").value = 0;
};
