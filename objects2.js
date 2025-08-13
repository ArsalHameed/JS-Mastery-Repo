//objects singleton
const userProfile = new Object()
const userProfileMenu = {}
userProfile.id =23
userProfile.name=   "Ducks"

console.log(userProfile)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    2: "c",
    3: "d"
}
//key value pair
//const obj3 = {obj1,obj2}
//Using assign function
const happy ="hassan"
const obj3 = Object.assign({}, obj1,obj2)
//Using spread operator
//const obj3 = {...obj1,...obj2}
console.log(obj3)

console.log(Object.keys(userProfile))
console.log(Object.values(userProfile))
console.log(Object.entries(userProfile))