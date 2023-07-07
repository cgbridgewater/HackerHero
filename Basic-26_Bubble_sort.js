// Understanding how to implement basic sorting algorithm is a good exercise. For this particular challenge, you are to implement bubble sort.The animation below demonstrates how bubble sort works.

// <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif" alt="bubble sort" />

// You'll note that almost all sorting algorithms have two for loops. For bubble sort, you'll also note two for loops (one inside each other).

// // for loop method // //
function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
return arr;
}





// // while loop method // //
// function bubbleSort(arr){
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return arr;
// }


bubbleSort([5,3,1,2]) //to return [1,2,3,5]
bubbleSort([5,4,3,2,1]) //to return [1,2,3,4,5]
bubbleSort([5, 3, 1, -1, -3]) //to return [-3,-1,1,3,5]
bubbleSort([5, 3, 1]) //to return [1,3,5]