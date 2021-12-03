let realValue = 0;
let firstInput = document.getElementById('first');
let secondInput = document.getElementById('second');
let firstValue = document.getElementById('firstValue');
let secondValue = document.getElementById('secondValue');
let k = {
    USD: 484,
    AMD: 1,
};
function updateFirst() {
    firstInput.value = realValue / k[firstValue.value];
}
function updateSecond() {
    secondInput.value = realValue / k[secondValue.value];
}
firstInput.addEventListener('keyup', ({ target }) => {
    realValue = target.value * k[firstValue.value];
    updateSecond();
});

secondInput.addEventListener('input', ({ target }) => {
    realValue = target.value * k[secondValue.value];
    updateFirst();
});
firstValue.addEventListener('change', () => {
    realValue = firstInput.value * k[firstValue.value];
    updateSecond();
});
secondValue.addEventListener('change', () => {
    updateSecond();
});
