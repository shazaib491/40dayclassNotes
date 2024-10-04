// let array=[
//     {
//         id:1,
//         name:'English BOOK',
//         age:25,
//         active:true,
//         qty:2,
//         price:1000
//     },
//     {
//         id:2,
//         name:'Hindi Book',
//         age:30,
//         active:true,
//         qty:3,
//         price:1500
//     },
//     {
//         id:3,
//         name:'Maths Book',
//         age:28,
//         active:false,
//         qty:2,
//         price:1200
//     }
// ]


// function findOldestAge(array){
//     let oldestAge=array[0].age; // 25  
//     for(let i=0; i<array.length; i++){
//         if(array[i].age > oldestAge){ // 28  > 30  =t 
//             oldestAge=array[i];
//         }
//     }
//     return oldestAge;
// }

// console.log(findOldestAge(array));


// let oldestAge=array[0].age; //

// oldestAge=array.find((element)=>{
//     if(element.age > oldestAge){
//         oldestAge=element.age;
//         return oldestAge
//     }
// })

// console.log(oldestAge)


// function findActiveUser(users){
//     let activeUser=[]
//     for(let user of users){
//         if(user.active){ // true 
//             activeUser.push(user)
//         }
//     }
//     return activeUser
// }


// console.log(findActiveUser(array));


// let activeUser=array.filter((element)=>element.active)

// console.log(activeUser)


// function findTotalPrice(array){
//     let totalPrice=0;
//     for(let element of array){
//         if(element.price && element.qty){
//             totalPrice=totalPrice+(element.price*element.qty);
//         }
//     }
//     return totalPrice;
// }


// console.log(findTotalPrice(array))


// let totalPrices = array.reduce((totalPrice, element) => {
//     if (element.price && element.qty) {
//         totalPrice += (element.price * element.qty);
//     }
//     return totalPrice;
// },0); // Initial value set to 0


// // let totalPricess = array.reduce((totalPrice, element) => totalPrice += (element.price * element.qty),0); 

// // console.log(totalPrices)
// // console.log(totalPricess)


// let emps=[
//     {
//         id:1,
//         name:'John',
//         age:30,
//         salary:5000,
//         department:'IT'
//     },
//     {
//         id:2,
//         name:'Jane',
//         age:28,
//         salary:6000,
//         department:'HR'
//     },
//     {
//         id:3,
//         name:'Bob',
//         age:35,
//         salary:7000,
//         department:'IT'
//     }
// ]


// function findDepartments(departments){
//     let hrs = []
//     let its=[]
//     for(let employee of emps){
//         if(employee.department=='IT'){
//             its.push(employee)
//         }
//         if(employee.department=='HR'){
//             hrs.push(employee)
//         }
//     }

//     let depart={
//         hr:hrs,
//         it:its
//     }

//     return depart;
// }

// console.log(findDepartments(emps))


// let newGroup=Object.groupBy(emps,(element)=>{
//     return element.department;  // return 'IT' or 'HR'
// })
// console.log(newGroup)


// const user ={
//     username:'admin',
//     email:'admin@gmail.com',
//     password:'123'
// };


// const Person = {
//     first :"user",
//     email:user.email,
//     password:user.password,
//     getFullName:function(){
//         return this.first;
//     }
// }


// function Person(age,gender){
//     this.age=age;
//     this.gender=gender;
//     this.nationlity="Indian";
    
//     //setter function 
//     this.setFullName=function(firstName,lastName){
//         if(firstName!=='spam' && firstName!==''){
//             this.first=firstName;
//             this.last=lastName;
//         }else{
//             console.log('Invalid first name');
//         }
//     }

//     //getter function 
//     this.getFullName=()=>{
//         return this.first+" "+this.last;
//     }
// }

// const date=new Date();

// const obj=new Object();

// Person.prototype.username="daud"
// Person.prototype.printuser=function(){
//     console.log(this.username);
// }
// let person =new Person(25,'Male');
// person.setFullName('Daud','khan');
// person.printuser();


// let person1=new Person(50, 'Male');
// person1.changeName=function(name){
//     this.first=name;
// }

// person1.changeName("admin");
// console.log(person1)
// let person2=new Person('Rashid','Khan',50, 'Male');



// console.log(person);



// const allUser=new Object();

// allUser.username="admin";

// allUser.email="admin@gmail.com";

// allUser.password="123";

// console.log(allUser)

// shallow copy 
// deep copy 
// object destructuring 
// arraw destructuring 


// dom --> 4 

// function Cars(brand,model,year){
//     this.brand=brand
//     this.model=model
//     this.year=year;

//     this.getDetails=function(){
//         return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
//     }
// }

// const car=new Cars("toyota","5",2022);
// car.year=2002;
// console.log(car.getDetails())



// refrence copy 
let obj1=[1,2,3,4,5]; //987654--->obj1=[1,2,3,4,5]

let obj2=obj1; //987654

obj2[0]=100;

// console.log(obj1);


// shallow copy
//        0,1,2,3,4,5
let arr1=[1,2,3,4,5,[1,2,3]]; //34545   // 987654
// let arr2=[...arr1]// 98765634
let arr2=structuredClone(arr1);//deep clone 
arr2[5][0] = 100;
// console.log(arr1)
// console.log(arr2)

// 1.)ref copy
// 2.)shallow copy
// 3.)deep copy


// let refObj={name:'admin',email:'admin@gmail.com',labels:{
//     primary:'admin',
//     secondary:'user'
// }
// };

// let refObj2=refObj;
// refObj2.labels.primary = 'first';
// console.log(refObj)
// console.log(refObj2)

// //shallow copy 
// let refObj3={...refObj};

// refObj3.name="password";

// let refObj4=structuredClone(refObj); //deep copy
// refObj4.labels.primary = 'last';

// console.log(refObj4)
// console.log(refObj3)


// let array=[1,2,3,4,5];

// console.log(array[3])

const [one,second,,,...zohaib]=[1,2,3,4,5];
console.log(one);
console.log(second);

console.log(zohaib);


const obj={name:'admin',email:'admin@example.com',password:'admin'}

const {name:nm,email:em,...rest}=obj;

console.log(nm)
console.log(em)
console.log(rest)
