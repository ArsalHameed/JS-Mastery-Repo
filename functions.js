// We are studying functions with memory management

function sayMyName(username="sam"){
    return `${username} is our Boss`
}

console.log(sayMyName())
//fuction that gets multiple argument having only one parameter using spread operator
function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(1,2,3,4    ))

const myArray = [1,23,4]

function getNewArray (getArray){
    return getArray[0]
}

console.log(getNewArray(myArray))