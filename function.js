// // let s=0;
// // for(let i=1; i<=10; i++){
// //     s+=i;
// // }

// // console.log(s);

//             // arguemnt
// function sum(startValue, endValue){ //decleration of function
//     let s=0;
//     for(let i=startValue; i<=endValue; i++){
//         s+=i;
//     }
//     return s;
//     //defination of function
// }

// console.log(sum(10,20)) //execute
// console.log(sum(1,10))

// console.log("Hello world");

// function message(msg){
//     console.log(msg);
// }

// message("India")

// regular function

// {
//     console.log(a)
//     var a=10;
// }

console.log(answer());

function answer() {
  var a = 200;
  console.log(a);
}

console.log(product(10, 20));

function product(a, b) {
  return a * b;
}

// console.log(a);

// function expressions
// var print=function(){
//     console.log("Hello world");
// }

// print();

// console.log(a);
// let  a=10;

// for(let a=1; a<=20; a++){
//     console.log(a);
// }

// console.log("Hello world");

// var a=20;
// let a=200;

// console.log(a);

// for(let i=0;;i++){}

// console.log(i);

// pass something return something

// function expression
// function hello() {
//   console.log("hello");
// }

// pass nothing return nothing
function printHello() {
  console.log("Hello World");
}

printHello();

// pass something return nothing
function passSomething(params) {
  console.log(params);
}

passSomething("Adeeb khan");

// pass nothing return something
function passNothingReturnSomething() {
  let s = 1 + 20;
  return s;
}

let sumofnumber = passNothingReturnSomething();

console.log(sumofnumber % 2 == 0 ? "number is valid" : "invalid number");

// pass something return something
function sumOfTwoNumbers(a, b) {
  let s = a + b;
  return s;
}

let ans = sumOfTwoNumbers(100, 50);
console.log(ans * 30);

myWorld();
function myWorld() {
  console.log("disneyLand");
}

//anonymous function
// 1.)function expression
var hello = function () {
  console.log("Hello world");
};

// var sum=function(a,b){
//     console.log(a+b)
// }

// sum(10,20)

// var mulitply=function(){
//     let product=10*20;
//     return product
// }

// console.log(mulitply())

// var divide=function(a,b){
//     return a/b;
// }

// console.log(divide(10, 20));

// 2) arrow function
// console.log(printMessage)
// const  printMessage = () => {
//   console.log("Message");
// };


// printMessage();

var sum = (a, b) => {
  console.log(a + b);
};

sum(10, 20);

var mulitply = () => {
  let product = 10 * 20;
  return product;
};

console.log(mulitply());

var divide = (a, b) => {
  return a / b;
};


var printHelloWorld=()=>console.log("Hello")
var calculate=(a,b)=>a+b;
console.log(calculate(12,2))
printHelloWorld();


// iife function 
// immediatley invoke function exectuion 
console.log((function(a,b){
    console.log("jsdnjklsdnfjsdjklfsdjkfljsdnjlfnsdl",10,20)
    return 10+20;
})(10,20));


(()=>console.log("Samjhe"))();

var a=10;
{
    let a=100;
    console.log(a)
// console.log(a)
}

{
    console.log(a);
    let nae="admin";
console.log(nae)

}


console.log(a)