// YOUR CODE BELOW
// define fuct that take two strings for args string
const lastCharacter= (str1, str2) => {
    // if statment that eval. if the last index of each strign is the same. otherwise
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
        return true 
    }
    else {
        return false
    }
    
}; 

console.log(lastCharacter('pin', 'poon'))