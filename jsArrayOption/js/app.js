const ulList = document.getElementById('list');
let ulArray = [];
let paragraph = document.createElement('p');
let editIndex = -1;

function onInputChanged(event) {
    let input = event.target.value;// value of the input field
    paragraph.textContent = input; // set the text content of the paragraph to the input value
    document.body.appendChild(paragraph); // append the paragraph to the body
}

function addTask() {
    if (editIndex === -1) {
        let listElement = createListElement(paragraph.textContent);
        ulList.appendChild(listElement);
        ulArray.push(paragraph.textContent);
    } else {
        let listElement = ulList.children[editIndex];
        listElement.firstChild.textContent = paragraph.textContent;
        ulArray[editIndex] = paragraph.textContent;
        editIndex = -1;
    }
    paragraph.textContent = '';
    document.getElementById('inputField').value = '';
}

function createListElement(text) {
    let listElement = document.createElement('li'); // create a new list element
    listElement.setAttribute('class', 'list-group-item'); // set the class attribute of the list element
    listElement.textContent = text; // set the text content of the list element

    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'offset-3 btn btn-primary');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(listElement, text);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'offset-1 btn btn-danger');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(listElement, text);

    listElement.appendChild(editButton);
    listElement.appendChild(deleteButton);

    return listElement;
}

function editTask(listElement, oldText) {
    let inputField = document.getElementById('inputField');
    inputField.value = oldText;
    paragraph.textContent = oldText;
    for (let i = 0; i < ulList.children.length; i++) {
        if (ulList.children[i] === listElement) {
            editIndex = i;
            break;
        }
    }
}

function deleteTask(listElement, text) {
    ulList.removeChild(listElement);
    let newUlArray = [];
    for (let i = 0; i < ulArray.length; i++) {
        if (ulArray[i] !== text) {
            newUlArray.push(ulArray[i]);
        }
    }
    ulArray = newUlArray;


}

document.getElementById('inputField').addEventListener('input', onInputChanged);    