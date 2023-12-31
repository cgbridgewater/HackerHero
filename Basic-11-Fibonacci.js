// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.


function fibonacci(index){
    temp1 =0
    temp2 =0
    fib =0
    for(i =0 ; i<index; i++){
        if(i == 0){
            fib = 0
            temp2 ++
        }
        fib = temp1 + temp2
        temp2 = temp1
        temp1 = fib
    }
return fib
}

console.log(fibonacci(5));
fibonacci(0) //to return 0
fibonacci(1) //to return 1
fibonacci(2) //to return 1
fibonacci(5) //to return 5
fibonacci(6) //to return 8
fibonacci(7) //to return 13