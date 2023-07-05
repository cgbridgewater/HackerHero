// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    // Enter code below
    if(arr.length < 2){
        return null
    } else 
        return arr[arr.length-2] 
}

secondToLast( [42,true,4,"Kate",7] ) //to return Kate
secondToLast([42,true,4,"Kate",7, 9] ) //to return 7
secondToLast([42,true,4,"Kate",7, 9, "dojo", "awesome"]) //to return dojo
secondToLast([1]) //to return null


