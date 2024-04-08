// declaring arrays
let myArray1 = [];  // empty array

// Array literal 
let myArray2 = ["HTML", 3, "CSS","JAVA","PYTHON"]; 
// console.log(myArray2[3]);                         //accessing elements in a array where 0, 1,2 are index of the array
// console.log("First element",myArray2[0]);            // accessing first element
// console.log("Last element",myArray2[myArray2.length - 1]);  // accessing last element 
myArray2[1] = "REACT"     // modifying the element of the array using index --[ 'HTML', 'REACT', 'CSS', 'JAVA', 'PYTHON' ]
//console.log(myArray2)
myArray2.push("NODE JS")             //add element to the end--[ 'HTML', 'REACT', 'CSS', 'JAVA', 'PYTHON', 'NODE JS' ]
//console.log(myArray2)
myArray2.unshift("WEBDEVELOPMENT")  // add element at the beginning--['WEBDEVELOPMENT','HTML','REACT','CSS','JAVA','PYTHON','NODE JS']
//console.log(myArray2)
myArray2.pop()                      //remove element at the end  -- [ 'WEBDEVELOPMENT', 'HTML', 'REACT', 'CSS', 'JAVA', 'PYTHON' ]
//console.log(myArray2)       
myArray2.shift()                    //remove element at the beginning -- [ 'HTML', 'REACT', 'CSS', 'JAVA', 'PYTHON' ]
//console.log(myArray2)
let len = myArray2.length      // array.length -- to know length of the array
console.log(len)

// to increase or decrease the length of the array
// myArray2.length = 10;
// console.log(myArray2, myArray2.length)

// myArray2.length = 3;
// console.log(myArray2)

let myArray3 = new Array();         // using new key word
myArray3[0] = "12";
myArray3[1]="34";
myArray3[2] ="56";

//console.log(myArray1, myArray2, myArray3)


// to get array with desired separators
console.log(myArray3.join(';'))


//concat 2 arrays will be added at the end
concatCourses = myArray2.concat(myArray3);
console.log(concatCourses)

//converts array into string with commma separated
console.log(myArray2.toString());

//creates an empty array with 5 elements
const number = new Array(5);
console.log(number)

// const numbers = new Array[5]; // error
// console.log(numbers)


//creates an array with 1 element 5
const numbers1 = [5];
console.log(numbers1)


