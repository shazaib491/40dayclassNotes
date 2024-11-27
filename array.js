let array=[1,2,3,4,5];

// function searchElement(element,index,array){
//     return element===3;
// }

// first class function 
// let findElement=function(element,index,array){
//     return element===3;
// }

// let findElementUsingArrow=(element,index,array)=>{
//     console.log(element,index,array);
//     // if(element===3){
//     //     return element
//     // }
// }

// array.find(findElementUsingArrow)

// method to find element in an array

// for(let i=0;i<array.length;i++){
//     if(array[i]===3){
//         console.log(array[i]);
//     }
// }
// let str="hello warld"

// for(let letter of str){
//     if(letter==='a'){
//         console.log(letter);
//     }
// }

// find index 

    
// let printElement = (element,index,array)=>console.log(element,index,array);

// array.forEach((element,index,array)=>console.log(element,index,array))

// let newArray=array.map((element,index,array)=>{
//     return index*2;
// });

// console.log(newArray);

// let index=array.findIndex((element,index,array)=>{
//     return element===3;
// })

// console.log(index);


let newArray=array.filter((element,index,array)=>{
    return element>2;
})

console.log(newArray)