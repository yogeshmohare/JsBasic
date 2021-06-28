let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  render();
  inputEl.value="";
});

function render(){
let listItems="";
for (let i = 0; i < myLeads.length; i++) {
//   listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] + "</a href='#'></li>";
  listItems += `
  <li>
  <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a href='#'>
  </li>`;
 }
ulEl.innerHTML=listItems;
}