// create new array of specified length
let newArray = new Array(1, 2, 3, 4, 5, 6, 7, 8); // -- constructor method
console.log(newArray, newArray.length)
//--------------------------------------------------------------------------------
// largest number in the array


function secondlargestArray(arr) {
    let firstLargest = arr.reduce((pre, cur) => { return pre > cur ? pre : cur })
    let index = arr.indexOf(firstLargest);
    arr.splice(index, 1)
    return Math.max(...arr)

} console.log(secondlargestArray(newArray))

//-------------------------------------------------------------------------------------
// element exist in array
function checkArray(element) {
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] == element)
            return element + ' element exist in array'


    }
    return element + ' does not exist in array'

}
console.log(checkArray(3));
//-------------------------------------------------------------------------------------
// interchange 1st & last element
let temp = newArray[0];
newArray[0] = newArray[newArray.length - 1];
newArray[newArray.length - 1] = temp;
// console.log(newArray)
[newArray[0], newArray[newArray.length - 1]] = [newArray[newArray.length - 1], newArray[0]]
// console.log(newArray)

//---------------------------------------------------------------------------------------
// includes method
console.log(newArray.includes(1))

//-------------------------------------------------------------------------------------
//array.indexOf(element)-- retur index, index of element doest not exist in array is -1
console.log(newArray.indexOf(10))


//----------------------------------------------------------------------------------------
// new array using from method
let newArray1 = Array.from("RISHIKA") // string
console.log(newArray1)


//--------------------------------------------------------------------------------------
// new array using for loop
function createArray() {
    let size = 5;
    let newArray1 = [];
    for (let i = 0; i < size; i++) {
        newArray1.push('Elements')
    }
    return newArray1
}
console.log(createArray());

//----------------------------------------------------------------------------------------
//create array between given 2 numbers

function newArray2(start, end) {
    let myArray = []
    for (i = start; i <= end; i++) {
        myArray.push(i)

    }
    return myArray

}

console.log(newArray2(10, 20))
//---------------------------------------------------------------

let sum = newArray.reduce((sum, cur) => {
    return sum += cur
})
console.log(sum)

//-------------------------------------------------------------------
// remove falsy elements


let arr1 = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

function removeFalsy(arr) {
    let truthyArray = [];
    arr.forEach((element) => {
        if (element) {
            truthyArray.push(element)
        }

    }
    )
    return truthyArray


}

console.log(removeFalsy(arr1))