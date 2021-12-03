let faqList = document.getElementById('faqList');
let data = [
    ['Question #1', 'Answer #1'],
    ['Question #2', 'Answer #2'],
    ['Question #3', 'Answer #3'],
];

updateFaqBody();

function updateFaqBody() {
    for ([question, answer] of data) {
        let row = createRow(question, answer);
        faqList.appendChild(row);
    }
}

function createQuestion(question) {
    let questionElement = document.createElement('p');
    questionElement.classList.add('faqQuestion');
    questionElement.innerText = question;
    return questionElement;
}
function createShowButton() {
    let showButton = document.createElement('input');
    showButton.classList.add('faqShowButton');
    showButton.type = 'button';
    showButton.value = 'show';
    showButton.addEventListener('click', handleShowClick);
    return showButton;
}
function createAnswer(answer) {
    let answerElement = document.createElement('p');
    answerElement.innerText = answer;
    answerElement.classList.add('hidden', 'faqAnswer');
    return answerElement;
}
function createRow(question, answer) {
    let row = document.createElement('li');
    row.classList.add('faqListItem');

    let questionElement = createQuestion(question);
    let showButton = createShowButton();
    let answerElement = createAnswer(answer);

    row.append(questionElement, showButton, answerElement);
    return row;
}

function handleShowClick({ target }) {
    target.value = target.value == 'show' ? 'hide' : 'show';
    target.nextSibling.classList.toggle('hidden');
}
