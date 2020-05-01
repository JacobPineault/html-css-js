const numCtrl = (nbr) => {
  document.getElementById("textbox").style.color = "black";
  document.getElementById("textbox").style.fontStyle = "normal";
  document.getElementById("textbox").style.fontWeight = "normal";
  if (nbr % 2 === 0) {
    document.getElementById("textbox").style.color = "red";
  }
  if (nbr % 3 === 0) {
    document.getElementById("textbox").style.fontStyle = "italic";
  }
  if (nbr % 7 === 0) {
    document.getElementById("textbox").style.fontWeight = "bold";
  }
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
