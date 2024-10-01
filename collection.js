// array of user
let users = [
  {
    id: 1,
    name: "admin",
    email: "admin@example.com",
    password: "123",
    role: "admin",
  },
  {
    id: 2,
    name: "user",
    email: "user@example.com",
    password: "123",
    role: "user",
  },
  {
    id: 3,
    name: "shazaib",
    email: "shazaib@example.com",
    password: "123",
    role: "sdssa",
  },
];

// console.table(users[2].email);

// for(let i=0; i<users.length; i++){
//     console.log(users[i].password);
// }


// for(let elements of users){
//     console.log(elements.name,elements.email,elements.password);
// }
// i=0; i<3  increment 


// id:1 
// 
users.forEach(function(element){
    console.log(element.name, element.email, element.password);
})


const allTransformedUser=users.map(function(element){
    if(element.name=="user"){
        element.role="VIP";
    }
    return element;
})

console.log(allTransformedUser)

// linear search

let findElement=2;

let gettingElement=users.find(function(element){
    if(element.id==findElement){ // 1==2
        return element;
    }
})

console.log(gettingElement)

let gettingElementIndex=users.findIndex(function(element){
    if(element.id==findElement){ //
        return element;
    }
})


console.log(gettingElementIndex)

//filter 
let role="admin";

let filterElement=users.filter(function(element){
    if(element.role==role){
        return element;
    }
})

console.log(filterElement)