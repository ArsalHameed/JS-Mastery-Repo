//this and arrow function

const user ={
    username: "arsal",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `)
    }
}
 //window is the global object on console

 function icecream (){
    console.log(this)
// we can not use this in functions
}

 icecream()

 //arrow functions
 const chai =  () => {
    let username = "arsal"
      console.log(this.username)
 }

 chai()

 
const addTwo = (num1,num2) => {
return num1+num2
}
console.log(addTwo(4,5))

const printName = () => ({username  })

console.log(addTwo(4,5))