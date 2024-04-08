let numbers = [1, 2, 3, 4, 5];
 
// Find the index of the element you want to remove
let indextoRemove = numbers.indexOf(4)
 
// Check if the element is found in the array
if (indextoRemove !== -1){
  // Use splice to remove the element at the specified index
numbers.splice(indextoRemove,1)
}
console.log(numbers)
 // Output: [1, 2, 3, 4]
//---------------------------------------------------------------------------------------------
 let letters = ["a", "b", "c", "d", "e"];
 
// Use push to add "f" to the end of the array
letters.push("f");
console.log(letters);

//------------------------------------------------------------------------------------------

let numbers1 = [27, 38, -67, 98, -1];
 
// Use the reduce method to calculate the sum of the elements
let sum = numbers1.reduce((pre,cur)=>{return pre+cur})
console.log(sum)

//------------------------------------------------------------------------------------------
let inputString = "abstemiously";
 
// Convert the string to lowercase to make the comparison case-insensitive

console.log(inputString.toUpperCase());

let vowelCount = 0;
let consonantCount = 0;

for(let i =0; i<inputString.length; i++){
    currentChar = inputString[i];

    if(currentChar === "a" || currentChar==="e" || currentChar==="i" || currentChar==="o" || currentChar==="u"){
            vowelCount++
    }
    else if(currentChar >= "a" && currentChar <="z"){
        consonantCount ++ 
    }

}
console.log("Number of Vowels:", vowelCount);
console.log("Number of consonants:", consonantCount)


//-------------------------------------reversed string----------------------------------------------------------
let inputString1 = "ACHIEVEMENT";
let reversedString = "";
for (i=inputString1.length-1; i>=0; i--){
    reversedString += inputString1[i];
}
console.log(reversedString)

//-------------------------------------find missing values-----------------------------------------------------------
let arr1 = [1,2,3,4,5,6,7,8,9,10];

function findMissing(arr){
    let missValues=[];
let maxValue = arr.reduce((item1, item2)=>{
return item1>item2 ? item1 : item2
})

let minValue = arr.reduce((item1, item2)=>{
    return item1<item2 ? item1:item2
})

for (i=minValue; i<maxValue; i++){
    if(arr.indexOf(i)<0){
        missValues.push(i)
    }
}
return missValues
}

console.log(findMissing(arr1))
//-----------------------even or odd numbers----------------------------------
function evenOdd(arr){
    let evenArray = [];
    let oddArray = [];
for (i of arr){
    if (i%2 ==0 ){
        evenArray.push(i)
    }
    else {
        oddArray.push(i)
    }
}
return [evenArray, oddArray]
}

console.log(evenOdd(arr1))

//------------------------even odd using filter----------------------------------
function filterEvenOdd(arr){
let evenValues = arr.filter((item)=>{
    return item%2 ===0
})
let oddValues = arr.filter((item)=>{
    return item%2 !==0
})
console.log(evenValues, oddValues)
}

console.log(filterEvenOdd(arr1))

//----------------------------factorial of a number --------------------------------
function factorial(inputNum){
   // const inputNum = prompt("Please eneter a value")
    let fact = 1;
    if (inputNum<0){
        console.log('invalid input')
    }
    for(i=1; i<=inputNum; i++){
        fact = fact*1

    }
    return fact
}

console.log(factorial(2))


//--------------------------------------find vowels ----------------------------
