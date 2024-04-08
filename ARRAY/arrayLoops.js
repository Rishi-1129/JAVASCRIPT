let score = [12, 34, 1, 2, 3, 4 , 5, 6,7 ,8];

function iteratesOverArray(arr){
    // returns each eleents in the array
    for (let i=0; i<arr.length; i++ ){
        console.log("for loop",arr[i])
    }

    for (i in arr){
        console.log("for in",arr[i]) // iterates over the array returns keys of the array
    }

    for (i of arr){
        console.log("for of", i) // iterates over the array returns the value of the keys
    }

   arr.forEach((i, index)=>{ // iterates over each element in array
    console.log("for Each", `${i} exists in ${index}`) 
   })
}

iteratesOverArray(score)
