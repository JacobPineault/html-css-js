let n = 0;

const loaded = () => {
    let numCtrl = document.getElementById("numbers");
    for (i = 1; i < 51; i++) {
        if ((i % 3) == 0 || (i % 5) == 0) {
            n += i;
        }
        let liTag = n;
        // `<li>The sum is ${n}</li>`;
        numCtrl.innerHTML += liTag;
    }
}