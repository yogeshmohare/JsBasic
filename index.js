// console.log("HEllo world");
// var _1my__Name = "vinod";
// console.log(_1my__Name);
//  // operator
// console.log(typeof _1my__Name);
//practice

// // console.log(20-"5");

// var myNo=98392193123;
// var myName="Yogesh";
// console.log(myNo);
// console.log(myName);
// console.log(isNaN(myName));

//assignment operator
// var a=10;
// var b='10';
// // console.log("is the both value is "+ a==b);
// // console.log(`is the both value is : ${a==b} `);
// console.log(a===b);

// //conditonarry operator
// var age=10;
// console.log((age>=18)?"u can vote":"u cant vote");

//switch coditions
// var area="rec";
// switch (area) {
//     case 'circle':
//         console.log("its circle");
//         break;
//     case 'triangle':
//         console.log("its triangle");
//         break;

//     default:
//         console.log("valide");
//         break;
// }

// //function experation
// function sum(a,b){
//     var total = a+b;
//     console.log(total);
//     return total;
// }
// var d=sum(3,9);
// // console.log(d+10);

// //Funcation
// var sum=function(q,w){
//     var sumOf=q+w;
//     return sumOf;
// }
// console.log(sum(10,11));

// //subtraction
// //anonymous function  expression;
// var sub= function(a,b){
//     var subtota=a-b;
//     return subtota;
// }
// var vale=sub(10,2);
// console.log("subtraction:- "+vale);

//--------------------->----------------------<--------------------

//modern javascript
// var num=10;
// let tableOf=3;
// //template string or template litterals
// console.log(`${tableOf} * ${num} = ${tableOf * num}`);

// //default parameter;
// function sum(a,b=4){
//     return a + b;
// }
// console.log(sum(10));

//Arrow function

// const sum = () => {
//     return 10+30;
// }
// console.log(sum());

// const sumOf=function(){
//     return 33+33;
// }
// console.log(sumOf());
//------------->------------------<--------------

//Arrays in JS

// console.log(nme[1]);

// for (let i = 0; i < nme.length; i++) {

//     console.log(nme[i]);
// }
// // in of loop
// for(let element of nme){
//     console.log(element);
// }

// nme.forEach(function(element,index,array){
//     console.log(array);

// });
// nme.forEach((element,index,array) =>{
//     console.log(element);
// });
// var nme = ["binod", "sjam", "jham", "dam"];
// console.log(nme.sort());
// console.log(nme.length);
// console.log(nme.indexOf("thapa"));
// console.log(nme.lastIndexOf("thapa"));
// console.log(nme.includes("thapa"));
// const prices=[300,200,150,250,350,400,100,270];

// // const findEl=prices.find((currValu) =>{
// //     return currValu<300;
// // });
// // console.log(findEl);

// const filterVal=prices.filter((currValu) =>{
//     return currValu<400;
// })
// console.log(filterVal);

// const months=['jan','march','april','june','july'];

// const newMonth=months.splice(months.length,0,'august');
// // console.log(months);
// const newMonth=months.splice(1,1,'March');
// // console.log(months);
// // console.log(newMonth);
// const indVal=months.indexOf('june');
// // if(indVal!=-1){
// //     months.splice(indVal,1,'June')
// //     console.log(months);
// // }else{
// //     console.log("not found");
// // }
// if(indVal!=-1){
//     months.splice(indVal,1,)
//     console.log(months);
// }else{
//     console.log("not found");
// }
//-------------------><-----------------------------------------

// const num=[1,4,9,16,25];

// let newArray=num.map((currValue) =>{
//     return currValue>9;
// });
// console.log(num);
// console.log(newArray);

// let newArray=num.map((currValue) =>{
//     return Math.sqrt(currValue);
// })
// console.log(newArray);
// let newArray=num.map((currValue) =>{
//     return currValue*2;
// }).filter((currValu)=>{
//     return currValu>10;
// })
// console.log(newArray);

//---------------------------><--------------------------
// Reduce Method

// let arr=[5,6,2];
// let sum=arr.reduce((accumulator,ele,index,array) => {
//      debugger;
//     return accumulator +=ele;
// })
// console.log(sum);
// arr=arr.sort((a,b) => a-b);
// console.log(arr);

// ------------------------><---------------------
// let myName="isYogesh";
// console.log(mYname.length);

///Escape character;
// let anySens='we are return \"value\" of form the month';
// console.log(anySens);

const curDate=new Date();
console.log(curDate.toString());
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getDate());
console.log(curDate.getDay());