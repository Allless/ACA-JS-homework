let counter = document.getElementById('counter');
let decreaseButton = document.getElementById('dec');
let resetButton = document.getElementById('res');
let increaseButton = document.getElementById('inc');


function updateCounter() {
    counter.innerText = localStorage['counter'];
}

if (localStorage) {
    if (!localStorage['counter']) {
        localStorage['counter'] = 0;
    }
    decreaseButton.addEventListener('click', () => {
        if (counter.innerText != '0') {
            localStorage['counter'] -= 1;
            updateCounter();
        }
    });
    
    increaseButton.addEventListener('click', () => {
        localStorage['counter'] -= -1;
        updateCounter();
    });
    
    resetButton.addEventListener('click', () => {
        localStorage['counter'] = 0;
        updateCounter();
    });

    updateCounter();
} else {
    counter.innerText = 'Ooops... Your local storage is unavailable';
}



