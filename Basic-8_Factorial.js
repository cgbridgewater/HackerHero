// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).

// For example, factorial(3)=6(or1 * 2 * 3);factorial(5)=120(or1 * 2 * 3 * 4 * 5).

function factorial(num){
    total=1
    for(i=1; i<=num; i++){
        total *= i
    }
return total
}

console.log(factorial(8));
factorial(3) //to return 6
factorial(5) //to return 120
factorial(7) //to return 5040
factorial(8) //to return 40320