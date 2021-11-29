let paragraphs = document.querySelectorAll('p');
let colorInput = document.getElementById('color');
let backgroundColorInput = document.getElementById('bColor');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', handleClick);

function handleClick() {
    let color = colorInput.value;
    let backgroundColor = backgroundColorInput.value;
    if (isValidColors(color, backgroundColor)) {
        for (p of paragraphs) {
            p.style.color = color;
            p.style.backgroundColor = backgroundColor;
            console.dir(p);
        }
    }
}

function isValidColors(...colors) {
    let validChars = '0123456789abcdefABCDEF';
    for (let color of colors) {
        if (color[0] != '#' || color.length != 7) {
            console.log(color);
            return false;
        }
        for (let i = 1; i < 7; i++) {
            if (!validChars.includes(color[i])) {
                return false;
            }
        }
    }
    return true;
}
