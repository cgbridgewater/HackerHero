// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true.

// Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str){
    // initiat counters
    count_open = 0
    count_closed = 0
    // loop through the string
    for(i=0; i<str.length;i++){
        //if ")" add to open count
        if(str[i] === "("){
            count_open++
            console.log("count open = ",count_open)
        }
        // if "(" add to closed count
        else if(str[i] === ")"){
            count_closed++
            console.log("count closed = ",count_closed)
            //if closed count passes open count, quit with false
            if(count_closed > count_open){
                return false
            }
        }
    }
    // Compare open vs closed = true != false
    if(count_open == count_closed){
        return true
    } else
        return false
}


parensValid("Y(3(p)p(3)r)s") //to return true
parensValid("N(0)t )0(k") //to return false
parensValid("N(0)t (0(k))") //to return true
parensValid("(N(0)t (0(k))") //to return false
parensValid("()(N(0)t (0(k)))") //to return true