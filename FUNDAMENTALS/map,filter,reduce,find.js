
// to perform certain function on the each elements of the given array
let array1 = [1,2,3,4];

array1.forEach((element,index,arr)=>{
//console.log(element+1,index, arr)
})


//map--high order javascript 
//to perform certain operation on each element of the given array and return a new array
//have return statement

array2 = array1.map((element,index,arr)=>{
    return (element*index)
    
})
//console.log(array2)

//filter method -- filter elements of the array based on the condition provided if its true gets added to the new array
array3 = array1.filter((element)=>{
    return element>2;
})
//console.log(array3)

//reduce method == based on the given function takes the elements from the array and retuurns a single value
let array4 = [2,4,6,8,10];
let array5 = array4.reduce((element1,element2,element3)=>{return element1+element2+element3})
//onsole.log(array5)


// find method --  returns the first matched value from the array that passes the condition it will not check the remaining values
let data = [
    {
        name:'ABCD', age:32
    },
    {
        name:'EFGH',age:34
    },
    {
        name:'ABCD1', age:41
    },
    {
        name:'ABCD2', age:56
    },
    {
        name:'ABCD2', age:45
    },
];

let filteredData = data.filter((elements)=>{
    return elements.age >40 || elements.name === "ABCD2"
})
console.log(filteredData)

let findData = data.find((element)=>{
    return element.age>34
})
console.log(findData)