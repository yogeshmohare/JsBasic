let num1 = 5;
let num2 = 4;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;
let total = document.getElementById("total");

let sums=0;
function sum() {
  sums = num1 + num2;
  total.textContent+= sums;
}
function sub() {
    let subs=num1-num2;
    total.textContent+=subs;
}
function div() {
    let divs=num1/num2;
    total.textContent+=divs;
}
function mult() {
    let mul=num1*num2;
    total.textContent+=mul;
}
