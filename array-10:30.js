let arr=[1,2,3,4,3,4,5];

// forEach 
// map ===> 
// find ==> 

// function forEach(array){
//     for(var i=0; i<array.length; i++){
//         console.log(array[i]);
//     }
// }

// forEach(arr);

// function map(array){
//     let newArray=[];
//     for(var i=0; i<array.length; i++){
//         newArray.push(array[i]*2);
//     }
//     return newArray;
// }
    
// function find(array,element){
// //    for(var i=0; i<array.length; i++){
//    for(var iteration of array){
//       if(iteration==element){
//         return iteration;
//       }
//     } 
//     return -1;
// }

// console.log(find(arr,4))


// function findIndex(array){
//     for(var i=0; i<array.length; i++){
//       if(array[i]==4){
//         return i;
//       }
//     }
//     return -1;
// }


// function reduce(array,defaultValue=0){
//     let s=defaultValue;
//     for(var i=0; i<array.length; i++) {
//         s+=array[i];
//     }
//     return s;
// }

// console.log(reduce(arr,10));


// function slice(array,start,end){
//     let dumArr=[];
//     for(var i=start; i<end; i++){
//         dumArr.push(array[i]); //
//     }
//     return dumArr;
// }

// console.log(slice(arr,2,5));

// function filter(array,deletedElement){
//     let filteredArray = [];
//     for(let i=0;i<array.length;i++){
//         if(array[i]!=deletedElement){
//             filteredArray.push(array[i]);
//         }
//     }
//     return filteredArray;   
// }

// console.log(filter(arr,4));




function printElement(element,index,softCopy){
    
    // console.log(index,")",element,'SC',softCopy);
    if(softCopy[index]==4){
        softCopy[index]=9;
    }
}


arr.forEach(printElement)
console.log(arr);


function trasnformElement(element){
    return element*2;
}

console.log(arr.map(trasnformElement))
let no=9;
function findElement(element){
    return element==no;
}

console.log(arr.find(findElement));


function findIndexElement(element){
    return element==no;
}

console.log(arr.findLastIndex(findElement));

function reduceElement(accumulator,element){
    return accumulator+element;
}

console.log(arr.reduce(reduceElement,10))

console.log(arr.slice(2,5))


function filterElement(element){
    // return element!=9;
    // if(element!=9){
    //     return element;
    // }
}


console.log(arr.filter(filterElement))


let arr=[1,2,3,4,3,4,5];

// const printElement=

function printElement(element,index,softCopy){
    console.log(element)
   
}


(function(){

})();


arr.forEach(function(){})

arr.forEach((element,index,softCopy)=>console.log(element))
console.log(arr);




console.log(arr.map(function (element,index,softCopy){
    return element*2;
}))

console.log(arr.map((element,index,softCopy)=>element*2))

// let no=9;


console.log(arr.find((element,index,softCopy)=>element==no));




console.log(arr.findLastIndex((element,index,softCopy)=>element==no));

function reduceElement(accumulator,element){
    return accumulator+element;
}

console.log(arr.reduce((accumulator,element)=>accumulator+element,10))

console.log(arr.slice(2,5))


function filterElement(element,index,softCopy){
    return element!=9;
}


console.log(arr.filter((element,index,softCopy)=>element!=9))