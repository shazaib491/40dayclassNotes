// const cars = [1, 2, 3, 4, 5];
// // console.table(cars.length)
// // //           0        1             2     3

// // // wap to print all element in array using for loop

// // print all element in array using for of loop

// function forEach(arrray) {
//   for (var element of arrray) {
//     console.log(element);
//   }
// }

// let brands = ["volvo", "toyota", "nano", "Alto"];
// forEach(cars);
// forEach(brands);

// console.table(cars);

// // 20 40 60 80 100

// /**
//  * i 0 1
//  * i 1
//  * i 2
//  * i 3
//  * i 4
//  */

// let transformedValue = map(cars);

// console.log(transformedValue);

// for(let i=0; i<=5; i++){
//     if(i==2){
//         continue;
//     }
//     console.log(i);
// }

// i 0
// i 1
// i 2

// i=0;

// while(i < 10){
//     i++;
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// do{
//     i++;
//     if(i==0){
//         continue;
//     }
//     console.log(i);
// }while(i < 10);

// i=0

// let days=4;
// function printDay(){
//     switch(days){
//         case 1:
//             return "Monday";
//         case 2:
//             return "Tuesday";
//         case 3:
//             console.log("Wednesday");
//             return;
//         case 4:
//             console.log("Thursday");
//             return;
//         case 5:
//             console.log("Friday");
//             return;
//         case 6:
//             console.log("Saturday");
//             return;
//         case 7:
//             console.log("Sunday");
//             return;
//         default:
//             console.log("Invalid day");
//     }
// }

// printDay();

// function printMessage(){
//     console.log("Hello World");
//     console.log("This will not be printed");
//     return "This will not be printed";
// }

// let num = [1, 2, 3, 4, 5];
// num=20;
// console.log(num);
// num=20;
// 100000 100003
// 100002 20
// 100003 []
// 100004 undefined
// const no=12;

// primtive data types and non prmitvve data types
// 10000 ,100001,100002,100003,10004,60000,70000,80000,
// const array = [1, 2, 3, 4, 5];
// function map(array) {
//   let newArray = [];
//   for (var i = 0; i <= array.length - 1; i++) {
//     newArray.push(array[i] * 20);
//   }
//   return newArray;
// }

// console.log(map(array));


// let uniqueElements=[10,20,40,30,50];


// // linear search 
// function find(arr,element){
//     for(let i=0; i < uniqueElements.length; i++) {
//         if(arr[i]==element){
//             return arr[i]
//         }
//     }
//     return "zohaib bhai bhopali";
// }


// console.time("start")
// console.log(find(uniqueElements,100))
// console.timeEnd("start")

// 
// let arrays=[1,2,3,4,5];

// console.log(arrays.map(transformedValue))

// function transformedValue(element){
//     return element*20;
// }


// console.log(array.map((element)=>{
//     if(element==4){
//         element=9;
//     }
//     return element;
// }))

// 10000,10001,10002
//1000

// console.log(this)
// function starts(){
//     console.log("start",this.name);
// }

// function run(){
//     console.log("human is running",this.name);
//     this.start();
// }

// // 1000 this

// // object is a collection of key value pairs
// let user={
//     name:"zohaib",
//     age:23,
//     role:'aggression',
//     run:run,
//     start:starts
// }

// user.run();



// // let result={
// //     name:'adeeb',
// //     age:30,
// //     marks:15,
// //     start:starts,
// // }

// user.start();
// user.run();
// result.start();





// console.log(user['name']);

// for(let key in user){
//     console.log(user[key]);
// }


// let users=[
//     {
//         id:1,
//         name:'admin',
//         email:'admin@example.com',
//         run:function(){
//             console.log("Hello",this.id)
//         }
//     },
//     {
//         id:2,
//         name:'zohaib',
//         email:'zohaib@example.com',
//         run:function (){
//             console.log("Hello",this.id)
//         }
//     }
// ]




// let students={
//     id:1,
//     name:'sarim',
//     email:'sarim@example.com',
//     subjects:['maths','english'],
//     study:function(name){
//         this.name = name;
//         console.log("I am studying",this.id)
//         console.log(this.name)
//     },
//     go:()=>{
//         console.log("Hello");
//     }
// }

// students.study("ayan");
students.go();

// console.log(students.name)
// console.log(students['email'])
// console.log(students.subjects)
// console.log(students.study())


// for(let key in students){
//     if(typeof students[key] !== 'function'){
//     console.log(students[key]);
//     }
//     if(typeof students[key] === 'function'){
//         students[key]();
//     }
// }

