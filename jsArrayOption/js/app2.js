const paragraph=document.createElement('p');

const ulElement=document.getElementById("list");

const inputElement=document.getElementById("inputField");

let  taskArray=[];

function onInputChanged(event){
    let input = event.target.value;// value of the input field
    paragraph.textContent = input; // set the text content of the paragraph to the input value
    document.body.appendChild(paragraph); // append the paragraph to the body
}

function addTask(event){
    let text=paragraph.textContent; // get the text content of the paragraph
    let listElement=createListElement(text); // create a new list element
    ulElement.appendChild(listElement); // append the list element to the ul element
    taskArray.push(paragraph.textContent); // add the text content of the paragraph to the task array
    paragraph.textContent=''; // set the text content of the paragraph to an empty string
    inputElement.value=''; // set the value of the input element to an empty string
}


function createListElement(text){
    
    let listElement=document.createElement("li"); // create a new list element
    listElement.setAttribute("class","list-group-item"); // set the class attribute of the list element
    listElement.textContent=text; // set the text content of the list element

    let deleteButton = document.createElement('button'); // create a new button element
    deleteButton.setAttribute('class', 'offset-1 btn btn-danger'); //   set the class attribute of the button element
    deleteButton.textContent = 'Delete'; // set the text content of the button element
    deleteButton.onclick = () => deleteTask(listElement,text); // set the onclick event handler of the button element

    listElement.appendChild(deleteButton); // append the button element to the list element


    return listElement; // return the list element
}

function deleteTask(listElement,text){
    ulElement.removeChild(listElement); // remove the list element from the ul element
    let newUlArray = [];
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i] !== text) {
            newUlArray.push(taskArray[i]);
        }
    }
    taskArray = newUlArray;
}