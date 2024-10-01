let users = [
    {
        id:1,
        name:'admin',
        email:'admin@example.com',
        password:'123',
        role:'admin'
    },
    {
        id:2,
        name:'user',
        email:'user@example.com',
        password:'123',
        role:'user'
    },
    {
        id:3,
        name:'shazaib',
        email:'shazaib@example.com',
        password:'123',
        role:'admin'
    }
]

// for(var i =0 ; i < users.length; i++){
//     console.group("--------------------------------")
//     console.log(users[i].name);
//     console.log(users[i].email);
//     console.groupEnd("--------------------------------")
// }

// for(let element of users){
//     console.group("--------------------------------")
//     console.log(element.name);
//     console.log(element.email);
//     console.groupEnd("--------------------------------")
// }
// console.log(users);
// console.log({})
// users.forEach((element,index,softCopy)=>{
//     console.group("--------------------------------")
//     console.log(index,")",element.name);
//     console.log(element.email);
//     console.groupEnd("--------------------------------")
// })

function login(){
    console.log("Logged in",this==user);
    console.log("Logged in",this==secondUser);
    console.log();
}

//1000 ---> this 
let user={
    name:'admin',
    email:'admin@gmail.com',
    password:'123',
    role:'admin',
    login:()=>{
        console.log("Logged in",this);
    }
}

// this==user =true
// this==secondUser = false 


let secondUser={
    name:'user',
    email:'user@gmail.com',
    password:'123',
    role:'user',
    login:login
}

// this == user = false 
// this == secondUser = true



user.login();
secondUser.login();
