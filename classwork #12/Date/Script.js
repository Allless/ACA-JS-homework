let button = document.getElementById('dateButton');
let date = new Date();
let text =
    date.getDate() +
    '/' +
    date.toString().split(' ')[1] +
    '/' +
    date.getFullYear();
let textElement = document.createElement('p');
textElement.innerText = text;
textElement.classList.add('hidden');

button.addEventListener('click', () => textElement.classList.toggle('hidden'));
button.parentNode.appendChild(textElement);

