const { json } = require("react-router-dom");

let string = "Rishika"
//console.log(typeof(string));  // string

// str.replaceAll('String to be replaced', 'replacement string')
let OriginalString = '//Ri3s4h5i6ka//';
let replacedString = OriginalString.replaceAll('/','*')
//console.log(OriginalString,replacedString)

//split()-- separates the given string into array 
//join() -- joins array into string
let stringmethod = OriginalString.split('/').join('+')
//console.log(stringmethod)

// str.startWith('checking string', position)
//console.log(OriginalString.startsWith('//',0)) // -- returns true

// Sort array of strings 
let listString = ['XYZ', 'Rishika', 'Abirami','Sanjith'];
let sortedArray =  [...listString].sort()  //listString.sort()
//console.log(sortedArray)

function string_sort(str){
    let i=0, j;
    while(i < str.length){
        j = i+1;
        while(j < str.length){
            if(str[j]< str[i]){
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp
            }
        }j++
    
    }i++
}

//console.log(string_sort(listString))

function extractNumber_Letters(str){
let numbers = '';
let letters = '';
for(i=0; i<str.length; i++){
    if(!isNaN(str[i])){
        numbers+=str[i]
    }
    else {
        letters+=str[i]
    }
}
console.log(numbers, letters)
}
extractNumber_Letters(OriginalString)

// convert object to string
let obj_to_str = {  
    name: "GeeksForGeeks",  
    city: "Noida",  
    contact: 2488  
};
// let convertedString = String(obj_to_str)
// console.log(typeof(convertedString))

let JSONString = JSON.stringify(obj_to_str)
console.log(JSONString)

const sortedString = (str) =>{
return [...str].sort((a,b)=>
a.localeCompare(b)).join()

}
console.log(sortedString(string))