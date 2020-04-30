const loaded = () => {
    let ulCtrl = document.getElementById("fbnums");
    for (idx = 1; idx <= 50; idx++) {
        if (idx % 3 === 0 && idx % 5 === 0) {
            let para = `<p> FizzBuzz </p>`;
            document.write(para.fontcolor("purple"));
            ulCtrl.innerHTML += para;
        } else if (idx % 3 === 0) {
            let para = `<p> Fizz </p>`;
            document.write(para.fontcolor("red"));
            ulCtrl.innerHTML += para;
        } else if (idx % 5 === 0) {
            let para = `<p> Buzz </p>`;
            document.write(para.fontcolor("blue"));
            ulCtrl.innerHTML += para;
        } else {
            let para = `<p> ${idx} </p>`;
            document.write(para.fontcolor("black"));
            ulCtrl.innerHTML += para;
        }
    }
}