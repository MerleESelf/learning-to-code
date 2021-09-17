// YOUR CODE BELOW

const defaultGreet =(fname, lname) => {
     if(lname === undefined) {
    lname = 'Doe'
    return `Hi ${fname} ${lname}!` 
     } else {
         return `Hi ${fname} ${lname}!`
     }
    };

defaultGreet('Merle', 'Self');

