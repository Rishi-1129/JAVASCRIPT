function print_current_page(){
window.print()
}


var today = new Date();
console.log(today);
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10){
    dd = '0'+dd
}

if (mm<10){
    mm='0'+mm
}
//console.log(mm+'/'+dd+'/'+yyyy) // 02/26/2024
//console.log(mm+'-'+dd+'-'+yyyy)// 02-26-2024
//console.log(dd+'/'+mm+'/'+yyyy)// 26/02/2024
//console.log(dd+'-'+mm+'-'+yyyy)// 26-02-2024

// Area of triangle
var s1 = 5;
var s2 = 6;
var s3 = 7;
var s= (s1+s2+s3)/2
var area = Math.sqrt(s*((s-s1)*(s-s2)*(s-s3)))
//console.log(area)



