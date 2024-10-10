// // console.log("Hello world!");
// // //
// // setTimeout(()=>{
// //     console.log("Hello World!");
// // },5000);

// // setInterval(()=>{
// //     console.log("Hello DD!");
// // },5000);

// // console.log("end")

// // let arr=[1,2,3,4,5]

// // arr.forEach(printElement);

// // function printElement(element){
// //     console.log(element)
// // }

// // Remove negative numbers
// function removeNeg(numbersArr, callback) {
//     const myArray = [];
//     for (const x of numbersArr) {
//       if (callback(x)) {
//         myArray.push(x);
//       }
//     }
//     return myArray;
//   }

//   function negativeRemover(x){
//     return x >= 0 //true // false
//   }

//   let arr=[1,2,3,4,-4,-3,5];
// //   array argument , nagativeRemover
//   console.log(removeNeg(arr,negativeRemover))
// passing a function as an argument to another function to control the sequence of the function
// is know as callback function

// function prepareStarter(callback) {
//   console.log("Preparing the starter...");
//   setTimeout(() => {
//     console.log("Starter is ready!");
//     callback();
//   }, 5000);
// }

// function prepareMainCourse(callback) {
//   console.log("Preparing the main course...");
//   setTimeout(() => {
//     console.log("Main course is ready!");
//     callback();
//   }, 5000);
// }

// function prepareDessert(callback) {
//     console.log("Preparing the dessert...");
//     setTimeout(() => {
//         console.log("Dessert is ready!");
//         callback();
//     }, 5000);
// }

// prepareStarter(()=>{
//     prepareMainCourse(()=>{
//         prepareDessert(()=>{
//             console.log("All dishes are ready!")
//         })
//     })
// })

// loading data from server

// function success(){
//     console.log("Data loaded successfully")
// }

// function error(){
//     console.log("Error loading data")
// }

// function apiCall(path,successFunc,errorFunc){
//     if(path){
//         setTimeout(()=>{
//             successFunc();
//         },5000)
//     }else{
//         setTimeout(()=>{
//             errorFunc();
//         },5000)
//     }
// }

// apiCall("",success,error)

// let response=new Promise(addebTamatar);

// function addebTamatar(resolve,reject){
//     setTimeout(()=>{
//         let s=10+20;
//         if(s==30){
//             resolve("tamatar is ready")
//         }else{
//             reject("tamatar is not ready")
//         }
//     },5000)
// }

// response.then(responseone).catch(responseTwo);

// function responseone(response){
//     console.log("responseone",response)
// }

// function responseTwo(response){
//     console.log("responseTwo",response)
// }

// loading data from server
// function loadDataFromServer(path){
//     return new Promise((resolve)=>{
//         if(path=="tamatar"){
//             resolve("tamatar is ready");
//         }else{
//             reject("Tamatar is to costly")
//         }
//     })
// }
// console.log(loadDataFromServer())
// loadDataFromServer("tamatar").then((successResponse)=>{
//     console.log("Data loaded successfully",successResponse)
// }).catch((errorResponse)=>{
//     console.log("Error loading data",errorResponse)
// })

function sum(a, b) {
  return new Promise((resolve, reject) => {
    let s = a + b; //10+20
    setTimeout(() => {
      if (s) {
        //0 se bari value to ye truthy return krega
        resolve(s);
      } else {
        reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
      }
    }, 1000);
  });
}

function square(result) {
  return new Promise((resolve, reject) => {
    let s = result * result; //10+20
    setTimeout(() => {
      if (s) {
        //0 se bari value to ye truthy return krega
        resolve("sum of two no is "+s);
      } else {
        reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
      }
    }, 1000);
  });
}

function multiply(result) {
  return new Promise((resolve, reject) => {
    let s = result * 2; //10+20
    setTimeout(() => {
      if (s) {
        //0 se bari value to ye truthy return krega
        resolve(s);
      } else {
        reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
      }
    }, 1000);
  });
}

function divide(result) {
  return new Promise((resolve, reject) => {
    let s = result / 2; //10+20
    setTimeout(() => {
      if (s) {
        //0 se bari value to ye truthy return krega
        resolve(s);
      } else {
        reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
      }
    }, 1000);
  });
}

  async function calculate(){
    try {
        let result=await sum(10,20);
        let squareResult=await square(result);
        let multiplyResult=await multiply(squareResult);
        let divideResult=await divide(multiplyResult);
        console.log(divideResult);    
    } catch (error) {
        console.log(error);
    }
  }

  calculate();