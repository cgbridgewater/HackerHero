// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end){
    // new length comparison
    newLength = arr.length+(start-end-1)
    // for loop to cycle through array
    for(i=0; i<arr.length; i++){
        // check array length is still longer than trimmed length
        if(arr.length  > newLength){
            // set ranges to look at
            if(i >= start && i < end){
                // temp holder
                var temp = arr[i];
                // second loop to move everything left 1
                for (let j = i; j < arr.length; j++){
                    arr[j] = arr[j+1];
                }
                // put temp to the end of the array
                arr[arr.length-1] = temp;
                // pop it off the end of the array
                arr.pop();
                //  move i back one since the array shifted 1
                i--;
                }
        }
    }
}


removeRange([20,30,40,50,60,70],2,4) //to return [20,30,70]
removeRange([20,30,40,50,60,70],1,3) //to return [20,60,70]
removeRange([20,30,40,50,60,70],1,4) //to return [20,70]
removeRange([1,2,3,4,5,6],2,5) //to return [1,2]