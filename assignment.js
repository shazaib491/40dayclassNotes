let array=[
    {
        id:1,
        name:'English BOOK',
        age:25,
        active:true,
        qty:2,
        price:1000
    },
    {
        id:2,
        name:'Hindi Book',
        age:30,
        active:true,
        qty:3,
        price:1500
    },
    {
        id:3,
        name:'Maths Book',
        age:28,
        active:false,
        qty:2,
        price:1200
    }
]


function findOldestAge(array){
    let oldestAge=array[0].age; // 25  
    for(let i=0; i<array.length; i++){
        if(array[i].age > oldestAge){ // 28  > 30  =t 
            oldestAge=array[i].age;//30 
        }
    }
    return oldestAge;
}

console.log(findOldestAge(array));


let oldestAge=array[0].age; //

oldestAge=array.find((element)=>{
    if(element.age > oldestAge){
        oldestAge=element.age;
        return oldestAge
    }
})

console.log(oldestAge)


function findActiveUser(users){
    let activeUser=[]
    for(let user of users){
        if(user.active){ // true 
            activeUser.push(user)
        }
    }
    return activeUser
}


console.log(findActiveUser(array));


let activeUser=array.filter((element)=>element.active)

console.log(activeUser)


function findTotalPrice(array){
    let totalPrice=0;
    for(let element of array){
        if(element.price && element.qty){
            totalPrice=totalPrice+(element.price*element.qty);
        }
    }
    return totalPrice;
}


console.log(findTotalPrice(array))


let totalPrices = array.reduce((totalPrice, element) => {
    if (element.price && element.qty) {
        totalPrice += (element.price * element.qty);
    }
    return totalPrice;
},0); // Initial value set to 0


// let totalPricess = array.reduce((totalPrice, element) => totalPrice += (element.price * element.qty),0); 

// console.log(totalPrices)
// console.log(totalPricess)


let emps=[
    {
        id:1,
        name:'John',
        age:30,
        salary:5000,
        department:'IT'
    },
    {
        id:2,
        name:'Jane',
        age:28,
        salary:6000,
        department:'HR'
    },
    {
        id:3,
        name:'Bob',
        age:35,
        salary:7000,
        department:'IT'
    }
]


function findDepartments(departments){
    let hrs = []
    let its=[]
    for(let employee of emps){
        if(employee.department=='IT'){
            its.push(employee)
        }
        if(employee.department=='HR'){
            hrs.push(employee)
        }
    }

    let depart={
        hr:hrs,
        it:its
    }

    return depart;
}

console.log(findDepartments(emps))


let newGroup=Object.groupBy(emps,(element)=>{
    return element.department;  // return 'IT' or 'HR'
})
console.log(newGroup)