// document.getElementById('count').innerText=5;
let cnt = 0;
let entries = document.getElementById("value-count");
let countEl = document.getElementById("count");

function increment() {
  cnt++;
  countEl.innerHTML = cnt;
}
function save() {
  let countAdd = cnt + " - ";
  entries.textContent += countAdd;
  countEl.textContent = 0;
  cnt = 0;
}
