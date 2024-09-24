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

// pass nothing return nothing 
function printHello(){
    console.log("Hello World")
}

printHello()

// pass something return nothing 
function passSomething(params){
    console.log(params);
}

passSomething("Adeeb khan")

// pass nothing return something 
function passNothingReturnSomething(){
    let s=1+20;
    return s;
}

let sumofnumber=passNothingReturnSomething();

console.log(sumofnumber % 2 == 0 ? 'number is valid':'invalid number');

// pass something return something 
function sumOfTwoNumbers(a,b){
    let s=a+b;
    return s;
}

let ans=sumOfTwoNumbers(100,50)
console.log(ans*30);


// {
//     console.log(a)
//     var a=10;
// }


console.log(answer())

function answer(){
    var a=200;
    console.log(a);
}

console.log(product(10,20));

function product(a,b){
    return a*b;
}

// console.log(a);



// function expressions
// var print=function(){
//     console.log("Hello world");
// }

// print();




