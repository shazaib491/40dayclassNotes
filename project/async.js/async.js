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

function prepareStarter(callback) {
  console.log("Preparing the starter...");
  setTimeout(() => {
    console.log("Starter is ready!");
    callback();
  }, 5000);
}

function prepareMainCourse(callback) {
  console.log("Preparing the main course...");
  setTimeout(() => {
    console.log("Main course is ready!");
    callback();
  }, 5000);
}


function prepareDessert(callback) {
    console.log("Preparing the dessert...");
    setTimeout(() => {
        console.log("Dessert is ready!");
        callback();
    }, 5000);
}

prepareStarter(()=>{
    prepareMainCourse(()=>{
        prepareDessert(()=>{
            console.log("All dishes are ready!")
        })
    })
})