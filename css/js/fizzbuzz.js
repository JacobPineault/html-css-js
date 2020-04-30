const addLiTag = (output) => {
    let li = `<li>${output}</li>`;
    document.getElementById("fbnums").innerHTML += li;
}

const loaded = () => {
    let output = "";

    let numCtrl = document.getElementById("fbnums");
    for (idx = 1; idx <= 50; idx++) {
        if ((idx % 3) == 0 && (idx % 5) == 0) {
            output = "FizzBuzz";
            addLiTag(output);
        } else if ((idx % 3) == 0){
            output = "Fizz";
            addLiTag(output);
        } else if ((idx % 5) == 0){
            output = "Buzz";
            addLiTag(output);
        } else {
            output == idx;
            addLiTag(output);
        }
        
       // let liTag = `<li>${output}</li>`;
        //numCtrl.innerHTML += liTag;
    }
}