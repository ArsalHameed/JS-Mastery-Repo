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
