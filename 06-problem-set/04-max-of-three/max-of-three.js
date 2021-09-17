// YOUR CODE BELOW
// define funct maxoOfThree takes 3 arg for
const maxOfThree = (arg1, arg2, arg3) => {
    // need statment that will eval which if the 3 is bigger
    if( arg1 > arg2 && arg1 > arg3){ 
        return arg1;
    } 
    else if (arg2 > arg1 && arg2 > arg3){ 
        return arg2; 
    } 
    else if (arg3 > arg1 && arg3 > arg2){ 
    return arg3; 
    }
}

maxOfThree(6,8,0)
