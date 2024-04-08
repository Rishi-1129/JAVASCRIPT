// to remove duplicates in an array

const { SecurityRounded } = require("@mui/icons-material");

// indexof returns the first index of the element present in the array when first index and current index are not same then its duplicate
let array1 = [1,2,1,4,5,8,5,2,5,8];
let array2 = array1.filter((element, index, array)=>{
  return array.indexOf(element) !== index
})
//console.log(array2)



//maximum in a array

let myArray1 = [10, 20, 20, 30, 56];
const maximuminArray=(arr) => {return arr.reduce((pre,cur)=>{
    return pre>cur ? pre : cur;
})
}
//console.log(maximuminArray(myArray1));

// minimum in a array
let mininArray = myArray1.reduce((pre, cur)=>{
  return  pre<cur?pre:cur
})
//console.log(mininArray)

// find 2nd largest in  array and remove first largest
let array12 = [20,30,40,50];
let firslLargest = Math.max(...array12);
let index = array12.indexOf(firslLargest);
array12.splice(index,1);
let secondLargest = Math.max(...array12);
//console.log(secondLargest)

const secondLargestFunction = (arr) =>{
  let firstLargest = arr.reduce((pre,cur)=>{return pre>cur ? pre:cur})
  let index = arr.indexOf(firstLargest)
  arr.splice(index,1)
  return Math.max(...arr)
}
secondLargestFunction(array12)

//-----------------------------------intersection of 2 arrays--------------------------------
let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

function intersectionArray(arr1, arr2){
  let  newArray= [] ;
  for(i=0; i<arr1.length;i++){
    for(j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            newArray.push(arr1[i])
        }
    }
  }
  return newArray


}

console.log(intersectionArray(first_array,second_array))

//--------------------------------- reverse an array ---------------------------------------
function reverseArray(arr){
let reversedArray = [];
for(i=arr.length-1; i>=0; i--){
    reversedArray.push(arr[i])
}
return reversedArray
}

console.log(reverseArray(first_array))

//------------------------------- reverse a string ------------------------------------------

function reverseString(str){
    let reversedStr = '';
    for (i=str.length-1; i>=0; i--){
        reversedStr+=str[i]
    }
    return reversedStr
}

console.log(reverseString('NITHISH'))

//------------------------remove duplicates----------------------------------------
let orig_Array = [1,1,2,2,3,3,4,4,5,5,6];
let newArray3 = orig_Array.filter((element, index, arr)=>{
    return arr.indexOf(element) === index  // return original values, if !== return duplicate array
})
console.log(newArray3)
