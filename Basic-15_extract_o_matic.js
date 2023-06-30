// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.

function extractDigit(num,digitNum){
    text = num.toString()
    textArr = text.split(".")
    whole = textArr[0]
    deci = textArr[1]

    if(digitNum > num.length){
        return 0
    }else if (digitNum >= 0) {
        return whole[(whole.length-1)-digitNum]
    }else 
        return deci[(deci.length-3)-(digitNum)]
}
console.log(extractDigit(1824, 2));
console.log(extractDigit(1824,0));
console.log(extractDigit(1234.56,-1));
console.log(extractDigit(199.35, 0));
console.log(extractDigit(199.35, -1));
console.log(extractDigit(199.35, -2));

extractDigit(1824, 2) //to return 8
extractDigit(1824,0) //to return 4
extractDigit(1234.56,-1) //to return 5
extractDigit(199.35, 0) //to return 9
extractDigit(199.35, -1) //to return 3
extractDigit(199.35, -2) //to return 5