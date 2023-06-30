// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result.

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

// Solve the challenge WITHOUT using recursion although you are allowed to convert the integer to a string.

// // "cast out the 9's" with modulo of 9
// function sumToOne(num) {
//     return(num %9 || 9)
// }

function sumToOne(num) {
    var numString = num.toString();
    var sum;
    do{
        sum = 0
        for(i=0; i<numString.length; i++){
            sum+= parseInt(numString[i]);
        }
        numString = sum.toString();
    } while(sum >=10)
return sum
}


console.log(sumToOne(5798));
sumToOne(35) //to return 8
sumToOne(928) //to return 1
sumToOne(5798) //to return 2
sumToOne(35798) //to return 5