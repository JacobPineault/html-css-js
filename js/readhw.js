const addLiTag = (idx) => {
    let li = `<li>Number: ${idx}</li>`;
    document.getElementById("numList").innerHTML += li;
}

const loaded = () => {
    let sum = 0;
    let count = 0;
    let avg = 0;
    let numCtrl = document.getElementById("numbers");
    for (idx = 1; idx <= 50; idx++) {
        if ((idx % 3) == 0 || (idx % 5) == 0) {
            addLiTag(idx);
            sum += idx;
            count++;
        }
        avg = (sum / count);
    }
    let liTag1 = `<li>The sum is ${sum}</li>`;
    let liTag2 = `<li>The average is ${avg}</li>`;
    numCtrl.innerHTML += liTag1;
    numCtrl.innerHTML += liTag2;
}