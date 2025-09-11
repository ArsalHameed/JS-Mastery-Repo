// 4th task
const myElement = document.getElementById("nameList");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", getInputValue);

function getInputValue(){
    const nameInput = document.getElementById("nameInput");
    nameInputValue = nameInput.value.trim();
    if(nameInputValue){
        const newElement = document.createElement("li");
        newElement.textContent= nameInputValue;
        myElement.appendChild(newElement);
        nameInput.value="";
    }
    else{
        nameInput.value="";
    }
}


// 3rd task
const students = [
{ name: "Ali", age: 22, marks: 85 },
{ name: "Ayesha", age: 20, marks: 92 },
{ name: "Bilal", age: 23, marks: 78 },
{ name: "Ibrahim", age: 22, marks: 76 },
{ name: "Usama", age: 21, marks: 80 }
];
function sortStudentsByMarks() {
    return students.sort((a, b) => b.marks - a.marks);
}
function getStudentsAboveEighty(){
    studentname = "";
    for (let i=0; i<students.length; i++)
    if (students[i].marks > 80 ) 
        studentname += students[i].name + " ";
    return studentname;
}

function getStudentTwentyOne(){
    for (let i=0; i<students.length; i++)
    if (students[i].age === 21 ) 
        return students[i];
}
console.log(sortStudentsByMarks());
console.log(getStudentsAboveEighty())
console.log(getStudentTwentyOne())


// 2nd task
const numbers = [10, 5, 8, 2, 6];

function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const doubled = processArray(numbers, function(num) {
    return num * 2;
});

const squared = processArray(numbers, function(num) {
    return num * num;
});

console.log('Doubled:', doubled);
console.log('Squared:', squared);
