// Given array, swap first and last, second and second-to-last, third and third-to- last, etc. Have the function return this swapped array.

// For example swapTowardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].

// With Push
function swapTowardCenter(arr){
    newArray =[]
    for(i = arr.length-1; i>=0; i--){
        newArray.push(arr[i])
    }
return newArray
}

// No Push
console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]));
console.log(swapTowardCenter(["hi", "coding", "dojo", "fans"]));
swapTowardCenter([true,42,"Ada",2,"pizza"]) //to return ["pizza",2,"Ada",42,true]
swapTowardCenter(["hi", "coding", "dojo", "fans"]) //to return ["fans","dojo","coding","hi"]

function swapTowardCenter2(arr){
    for(i = 0; i < arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
return arr
}

console.log(swapTowardCenter2([1,2,3,4,5,6]));
console.log(swapTowardCenter2(["hi", "coding", "dojo", "fans"]));
swapTowardCenter2([1,2,3,4,5,6]) //to return [6,5,4,3,2,1]
swapTowardCenter2(["hi", "coding", "dojo", "fans"]) //to return ["fans","dojo","coding","hi"]