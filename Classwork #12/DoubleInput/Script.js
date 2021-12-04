let input = document.getElementById('doubleInput');
let inputText = document.createElement('p');
input.parentNode.appendChild(inputText);
input.addEventListener(
    'keyup',
    ({ target }) => (inputText.innerText = target.value)
);
