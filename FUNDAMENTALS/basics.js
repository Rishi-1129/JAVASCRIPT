// Statements
let a,b,c,d  // let is used to define a variable
a=10;  
b=10; c=10;  // multiple statements separated by semicolons
d=a+b+c;
console.log(d);


// code blocks  -- statements combined together using curly braces to be excuted together
let Name = "Rishika"  // global variable accessible by any function
let Num =32            
function myFunction() {  // function keyword to create a function
    let Num=22;       // local variable declared inside function used only in this function
    console.log(Name);
    console.log(Num); // though the there is another global variable with same name it shows only localvariable
}
myFunction();

//variables
var name = "Rishika" // declare a varibale both local and global scope
let name1= "Sanjith" // used inside a function mutable
const name2 ="Rishisanju" // block scoped cannot be reassigned 


// nested ternary operator
function ternaryOperator(){  
    let marks = 25;
    let result = (marks<40) ? "unsatisfactory" : 
    (marks<60) ? "Average" :
    (marks < 80) ? "Good" : "Excellent";
    console.log(result)
}

ternaryOperator();