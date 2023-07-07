// Create a function that returns a two dimensional array containing bunch of zeros. For example twoDimensional(2,5) should return a following array:

// [

// [ 0, 0, 0, 0, 0],

// [ 0, 0, 0, 0, 0 ]

// ]

// One way to visualize this two dimensional array is think of above as a 2 row, 5 column matrix.

// You could also write above array to be as follows: [ [0,0,0,0,0], [0,0,0,0,0] ]. Whenever you're dealing with two dimensional arrays, be extra cautious on every single character. A simple typo or forgetting to add a comma or a square bracket can ruin the whole program.


function twoDimensional(row, column){

    let temp=[] //temp array to hold the 0's
    let arr=[] // main array to hold the temps
    // make row loop
    for(i=0; i<row; i++){
        // make column loop
        for(j=0; j<column; j++){
            // push a zero into the temp array
            temp.push(0)
        }
        // push the temp array into the main array  
        arr.push(temp)
        // clear the temp array
        temp=[]
    }
return arr

}

twoDimensional(2,5) //to return [[0,0,0,0,0],[0,0,0,0,0]]
twoDimensional(3,4) //to return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]
twoDimensional(1,5) //to return [[0,0,0,0,0]]