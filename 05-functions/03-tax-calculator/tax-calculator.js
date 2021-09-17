// YOUR CODE BELOW
// define fucnt of taxCalculator. Will take two arguments of item cost and purchasing location 
const taxCalculator = (cost, location) => {
    const ny = cost * .04 
    const nj= cost * .06625
    if(location === 'NY') { 
        return cost + ny
    } else if ( location === 'NJ') {
    return cost + nj
    }
}

console.log(taxCalculator(100, 'NJ')); 