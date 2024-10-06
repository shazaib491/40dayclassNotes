// let demoId=document.getElementById("demo");

// demoId.innerHTML="<p>hello wolrd</p>"

// console.log(demoId.getAttribute("style"));

// let bulbId=document.getElementById("builbId");
// let secret=document.getElementsByClassName("secret");
// let elementSelector=document.getElementsByTagName("h1"); 

// console.table(secret.length)

// function changeIdName(){
//     let checker=demoId.innerText; // current string "Hello World" 
//     if(checker==='Hello World'){ // current string is equal to "Hello World"
//         demoId.innerText="Hello Universe!";
//         // demoId.style.color="red";
//         // demoId.style.fontSize="30px";
//         // demoId.style.backgroundColor="yellow";
//         // demoId.style.border="2px solid black";
//         demoId.setAttribute("style","color:red;font-size:30px;background-color:yellow;border:1px solid red")
//     }else{
//         demoId.innerText="Hello World";
//         // demoId.style.color="green";
//         // demoId.style.fontSize="30px";
//         // demoId.style.backgroundColor="black";
//         // demoId.style.border="2px solid black";
//         let myStyle="color:green;font-size:30px;background-color:black;border:1px solid black";
//         demoId.setAttribute("style",myStyle);
//     }
// }


// function changeBulbColor(){
//     let isMatch=bulbId.src.match("pic_bulboff");
//     if(isMatch?.length){
//         bulbId.src="/images/pic_bulbon.gif"
//     }else{
//         bulbId.src="/images/pic_bulboff.gif"
//     }   
// }

// console.log(secret.forEach);



// for(let i=0; i<secret.length; i++){
//     console.log(secret[i],"AyanChapri");
//     if(secret[i].textContent=='Ayan Khan KTS'){//linear search
//         secret[i].style="color:red"; 
//         secret[i].setAttribute("style","color:green")
//     }
// }

// for(element of secret){
//     if(secret.textContent=='Ayan Khan KTS'){//linear search
//         secret.style="color:red"; 
//         secret.setAttribute("style","color:green")
//     } 
// }

// console.log(elementSelector,"by their selector name")

// using query selector =================================
let elementById=document.querySelectorAll("h1");

console.log(elementById)