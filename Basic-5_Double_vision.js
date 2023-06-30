// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6].

function double(arr){
    // for(i=0;i< arr.length; i++){
    //     arr[i] = arr[i]*2
    // }
    // return arr
    
    // OR //

    return arr.map(num => num*2)
}

console.log(double([1,2,3]));

double([1,2,3]) //to return [2,4,6]
double([-2, 0, 2]) //to return [-4,0,4]
double([2,10,100]) //to return [4,20,200]