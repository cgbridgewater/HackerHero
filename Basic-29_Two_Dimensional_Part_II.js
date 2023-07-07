// Create a function twoDimensional(row, column) that returns a two dimensional array containing bunch of zeros but where the outer values are filled with ones. For example twoDimensional(5,5) should return the following array:

// [

// [ 1, 1, 1, 1, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 1, 1, 1, 1 ]

// ]

// Assume that both row and column are greater than 2
function twoDimensional(row, column){
    let temp = []
    let arr = []
        // make a row
        for(i=0; i<row; i++){
            // make a column
            for(j=0; j<column; j++){
                // if its first or last column = 1
                if(j == 0 || j == column-1){
                    temp.push(1)
                } 
                // if its first or last row = 1
                else if(i == 0 || i == row-1){
                    temp.push(1)
                } 
                // anything else = 0
                else {
                    temp.push(0)
                }
            }
            // push temp to main array
            arr.push(temp)
            // clear the temp array
            temp = []
        }
    return arr
}

twoDimensional(2,5) //to return [[1,1,1,1,1],[1,1,1,1,1]]
twoDimensional(5,5) //to return [[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]\
twoDimensional(8,8) //to return [[1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1]]