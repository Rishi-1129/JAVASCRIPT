let myArray = ["A", "B", "C", "D"];
let result = "";
for (i = 0; i < myArray.length;) {     // usual for loop syntax
    result = result + myArray[i];
    i++
}
console.log(result)

for (let i in myArray) {                // let in array syntax
    result = result + myArray[i] + '\n';
    i++;
}

console.log(result)

// for in loop -- used to iterate over properties of an object
const courses = {
    firstCourse : "DSA",
    secondCourse : "Python",
    thirdCourse : "JAVA"
}
console.log(courses['firstCourse']); //referencing objects
console.log(courses.secondCourse);
let values = ""
for (let key in courses) {
    values += key+ '-->' +courses[key]+ '\n';
    key++;
}
console.log(values)

// for of loop -- used to iterate over values of an object 
let myArra1 = [1, 10, 20, 30, 40 ,50];
let result2 = " "
for (let value of myArra1){
    result2 += value+ '\n'
    value++
}

console.log(result2)

let myString = "RISHIKANITHISH";
let result3 = " ";
for (let value of myString) {
    result3 = result3+value + " ";
    value ++
}
console.log(result3)