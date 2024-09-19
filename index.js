// hoisting 
// hositing is javascript default behaviour  
// whenever we decalre any var it will goes to top of scope 

// 1 problem hositing 
 console.log(x);
 var x=10;
 console.log(x);

//  2 problem  scope 
{
   var y=200;
   console.log(y); 
}
console.log(y);//200 

// 3  problem  dfiend
var a=10; //defined 
var a=200; // redefined 

console.log(a)

// 4 prblem overwrite 
var q=900;
q=500;
console.log(q);

// 5 problem  loop scope 
for(var i=0; i<=10; i++){

}

console.log(i)









