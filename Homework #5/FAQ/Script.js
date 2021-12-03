let faqBody = document.getElementById('faqList');
let data = [
    ['Question #1', 'Answer #1'],
    ['Question #2', 'Answer #2'],
    ['Question #3', 'Answer #3'],
];

updateFaqBody();

function updateFaqBody() {
    for ([question, answer] of data) {
        let row = document.createElement('li');
        row.classList.add('faqListItem');

        let questionElement = document.createElement('p');
        questionElement.classList.add('faqQuestion');
        questionElement.innerText = question;

        let showButton = document.createElement('input');
        showButton.classList.add('faqShowButton');
        showButton.type = 'button';
        showButton.value = 'show';
        showButton.addEventListener('click', handleClick);

        let answerElement = document.createElement('p');
        answerElement.innerText = answer;
        answerElement.classList.add('hidden', 'faqAnswer');

        row.appendChild(questionElement);
        row.appendChild(showButton);
        row.appendChild(answerElement);
        faqBody.appendChild(row);
    }
}

function handleClick({ target }) {
    target.value = target.value == 'show' ? 'hide' : 'show';
    target.nextSibling.classList.toggle('hidden');
}
