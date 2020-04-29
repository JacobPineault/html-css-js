
const loaded = () => {
    let sum = 0;
    let count = 0;
    let avg = 0;
    let numCtrl = document.getElementById("numbers");
    for (i = 1; i < 51; i++) {
        if ((i % 3) == 0 || (i % 5) == 0) {
            sum += i;
            count++;
        }
        avg = (sum / count);
    }
    let liTag1 = `<li>The sum is ${sum}</li>`;
    let liTag2 = `<li>The average is ${avg}</li>`;
    numCtrl.innerHTML += liTag1;
    numCtrl.innerHTML += liTag2;
}