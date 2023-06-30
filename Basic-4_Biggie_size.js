// Given an array, write a function that changes all positive numbers in the array to “big”.

// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr){
    for( i = 0; i<arr.length; i++){
        if (arr[i] >0){
            arr[i] = 'big'
        }
    }
return arr
}
console.log(makeItBig([-1,3,5,-5]) );
makeItBig([-1,3,5,-5]) //to return [-1,"big","big",-5]
makeItBig([2,4,6]) //to return ["big","big","big"]
makeItBig([-4,0,4]) //to return [-4,0,"big"]