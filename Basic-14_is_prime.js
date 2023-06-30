// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

// For example, isPrime(3) should return true. isPrime(4) should return false as 4 is divisible by 2.

function isPrime(num){
    if (num !== 2){
        if (num !== 3){
            if (num !== 5){
                if( num % 2 === 0){
                    return false
                }
                if( num % 3 === 0){
                    return false
                }
                if( num % 5 === 0){
                    return false
                }
            }
        }
    }
    return true
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(13));
console.log(isPrime(65));
console.log(isPrime(17));
isPrime(3) //to return true
isPrime(4) //to return false
isPrime(13) //to return true
isPrime(65) //to return false
isPrime(17) //to return true