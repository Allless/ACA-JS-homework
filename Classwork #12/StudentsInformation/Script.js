let tableBody = document.getElementById('dataBody');
let nameInput = document.getElementById('nameInput');
let ageInput = document.getElementById('ageInput');
let gradeInput = document.getElementById('gradeInput');
let button = document.getElementById('enterButton');
let bodyValues = [];
let ageSort = document.getElementById('age');
ageSort.clickCount = 0;
ageSort.addEventListener('click', () => {
    ageSort.clickCount = ((ageSort.clickCount + 2) % 3) - 1;
    renderTable(ageSort.clickCount);
});
button.addEventListener('click', handleClick);

function handleClick() {
    let name = nameInput.value;
    let age = ageInput.value;
    let grade = gradeInput.value;
    if (name === '' || age === '' || grade === '') {
        return;
    }
    updateTable([name, age, grade]);
}

function updateTable(row) {
    bodyValues.push(row);
    tableBody.appendChild(createElement(row));
}

function createElement([name, age, grade]) {
    let row = document.createElement('tr');
    let nameElem = document.createElement('td');
    nameElem.innerText = name;

    let ageElem = document.createElement('td');
    ageElem.innerText = age;

    let gradeElem = document.createElement('td');
    gradeElem.innerText = grade;

    row.appendChild(nameElem);
    row.appendChild(ageElem);
    row.appendChild(gradeElem);
    return row;
}

function renderTable(dir) {
    let i = 0;
    for (let row of [...bodyValues].sort(
        (row1, row2) => row1[1] * dir - row2[1] * dir
    )) {
        for (let j in row) {
            tableBody.children[i].children[j].innerText = row[j];
        }
        i++;
    }
}
