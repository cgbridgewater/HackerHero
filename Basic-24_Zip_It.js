// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward.

// Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40]

function zipIt(arr1, arr2){
    newArray= []
    tempLength = arr1.length
        
        if(arr2.length > arr1.length){
            tempLength = arr2.length   
        }
        for (i=0; i<tempLength; i++){
                if(i<arr1.length){
                    newArray.push(arr1[i])
                }
                if(i<arr2.length){
                    newArray.push(arr2[i])
                }
        }
    return newArray
}


// split compare via if and else //
//      //
// function zipIt(arr1, arr2){
//     newArray= []
//     if(arr1.length > arr2.length || arr1.length == arr2.length){
//         for (i=0; i<arr1.length; i++){
//                 newArray.push(arr1[i])
//                 if(i<arr2.length){
//                     newArray.push(arr2[i])
//                 }
//         }
//     } 
//         else{
//             for (i=0; i<arr2.length; i++){
//                 if(i<arr1.length){
//                     newArray.push(arr1[i])   
//                 }
//                 newArray.push(arr2[i])
//             }
//         }
//     return newArray
// }



zipIt([1,2], [10,20,30,40 ]) //to return [1,10,2,20,30,40]
zipIt([1,2,3,4], [10,20 ]) //to return [1,10,2,20,3,4]
zipIt([1,2,3,4], [10,20,30,40 ]) //to return [1,10,2,20,3,30,4,40]
zipIt([1], [10,20 ]) //to return [1,10,20]
zipIt([1,2,3], [10 ]) //to return [1,10,2,3]