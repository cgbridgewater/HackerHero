// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max){
    // loop the array
    for(i=0; i<arr.length; i++){
        // check to be outside of filter limits
        if(arr[i] <= min || arr[i] >= max){
            // save value at location
            var temp = arr[i];
            // new loop
            for (let j = i; j < arr.length; j++){
                // push all array elements left
                arr[j] = arr[j+1];
            }
            // put temp saved element to end to be deleted
            arr[arr.length-1] = temp;
            // delete end element, effectivly shortening the array
            arr.pop();
            // shift i left 1, because the array shifted left 1
            i--;
        }
    }
    // great success! return the array
    return arr
}


// before refactor!
// function filterRange(arr, min, max){
//     for(i=0; i<arr.length; i++){
//         if(arr[i] > min && arr[i] < max){
//         }
//         else {
//             var temp = arr[i];
//             for (let j = i; j < arr.length; j++){
//                 arr[j] = arr[j+1];
//             }
//             arr[arr.length-1] = temp;
//             arr.pop();
//             i--;
//         }
//     }
//     return arr
// }



// with second array // not allowed but good practice!
// function filterRange(arr, min, max){
// temp = []
// for(i=0; i<arr.length; i++){
//         if (min < arr[i] && arr[i] < max){
//             temp.push(arr[i])
//         }
//     }
//     arr = temp
//     return arr
// }

console.log(filterRange([1,3,5,7,10], 4, 8));
console.log(filterRange([1,3,5,7,10], -1, 4));
console.log(filterRange([2,4,3,5], 2, 6));
console.log(filterRange([2,4,3,5], 0, 4));
console.log(filterRange([6,2,-3,5,7], 3, 8));
filterRange([1,3,5,7,10], 4, 8) //to return [5,7]
filterRange([1,3,5,7,10], -1, 4) //to return [1,3]
filterRange([2,4,3,5], 2, 6) //to return [4,3,5]
filterRange([2,4,3,5], 0, 4) //to return [2,3]
filterRange([6,2,-3,5,7], 3, 8) //to return [6,5,7]