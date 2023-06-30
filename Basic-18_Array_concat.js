// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays.

// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrayConcat(arr1, arr2){
    newArray = []
    for(i = 0; i< arr1.length; i++){
            newArray.push(arr1[i])
        }
    for(j = 0; j< arr2.length; j++){
            newArray.push(arr2[j])
        }
    return newArray
}
    arrayConcat([1,2], [3,4]) //to return [1,2,3,4]
    
    arrayConcat([1,2], [3,4,5]) //to return [1,2,3,4,5]
    
    arrayConcat([1,2,3], [3,4,5,6]) //to return [1,2,3,3,4,5,6]
    
    arrayConcat([ -1 ], [ -5, 3 ]) //to return [-1,-5,3]