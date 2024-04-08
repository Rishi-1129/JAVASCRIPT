// object with property and value with literal form 
var objectName ={    
    name:'Sanjith',
    std: '12th',
    school :'KVAN'
}
// Creating empty object and adding properties along with values with new keyword
var objectName1 = new Object();  
objectName1.rollNo = 3;
objectName1.names = 'Rishika';
objectName1.dob = "22-06-1999";
console.log(objectName1)

delete objectName.school   // deleting a property
console.log(objectName.name) // Accessing the objects

// creating empty object
var objectName1={}
console.log(objectName1)

//creating object with constructor method
function Student (name, sclass, school){
this.name=name;
this.sclass=sclass;
this.school=school;
}

var student1= new Student('sanjith', 10, 'KVAN')
console.log(student1)
student1.name = "David"   //replacing the values of properties
student1.sclass = 11
student1.school = "SBOA" 
console.log(student1)



