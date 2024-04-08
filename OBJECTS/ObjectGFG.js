let obj = {
    name : "Rishika V",
    age  : 25,
    gender : "female",
    work:"Developer",
    salary:25000,
    address : {
        plotno: 30,
        locality:"korattur",
        city:"chennai",
        pincode:600076
    }
}

console.log(`First Name is ${obj.name} and age is ${obj.age} residitng at ${obj['address']['city']}` )

obj['age'] = 22;
console.log(obj)
// to remove keys from the object
let array = ['gender','work','salary'];
function deleteKeysfromObject (myObj,arrayparam) {
for (index=0; index<arrayparam.length; index++){
    delete myObj[arrayparam[index]]
}
return myObj
}

let deletKeys = deleteKeysfromObject(obj,array)
console.log(deletKeys)