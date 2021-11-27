let schedule = document.getElementById('schedule');
let addButton = document.getElementById('submitLine');
let inputLine = document.getElementById('addLine');

function handleListItemClick({ target }) {
    for (let listItem of schedule.children) {
        if (listItem.firstChild === target) {
            target.classList.toggle('checked');
            break;
        }
        if (!listItem.firstChild.classList.contains('checked')) {
            break;
        }
    }
}

function createListElement(value) {
    let newElem = document.createElement('li');

    let elemText = document.createElement('span');
    elemText.innerText = value;
    elemText.addEventListener('mouseenter', handleEnter);
    elemText.addEventListener('mouseleave', handleLeave);

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Del';
    deleteButton.addEventListener('click', handleDelete);
    deleteButton.classList.add('delButton');

    newElem.appendChild(elemText);
    newElem.appendChild(deleteButton);

    return newElem;
}

function handleDelete({ target }) {
    target.parentElement.remove();
}

function handleEnter({ target }) {
    target.classList.add('hovered');
}

function handleLeave({ target }) {
    target.classList.remove('hovered');
}

function handleButtonClick() {
    if (inputLine.value === '') {
        return;
    }
    let newLine = createListElement(inputLine.value);
    schedule.appendChild(newLine);
}

addButton.addEventListener('click', handleButtonClick);
schedule.addEventListener('click', handleListItemClick);
export * from '/Script.js'