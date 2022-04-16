
let plus = document.querySelectorAll(".plus");
// console.log(plus);
let minus = document.querySelectorAll(".minus");
// console.log(minus);


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        plus[i].nextElementSibling.innerHTML++;
        total()
    })
}

for (let i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function() {
        if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;
            total()
        }
    })
}

