// need funct for greeting that takes an optional arg 
const greeting =(name) => { 
    if(name !== undefined){
    return `Hello ${name}!`
    } else {
        return 'Hello!'
    }
}

console.log(greeting('Merle'))
console.log(greeting())