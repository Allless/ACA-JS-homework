let realValue = 0;
let firstInput = document.getElementById('first');
let secondInput = document.getElementById('second');
let firstCurrency = document.getElementById('firstCurrency');
let secondCurrency = document.getElementById('secondCurrency');
let k = {
    USD: 484,
    AMD: 1,
};
function updateFirst() {
    firstInput.value = realValue / k[firstCurrency.value];
}
function updateSecond() {
    secondInput.value = realValue / k[secondCurrency.value];
}
firstInput.addEventListener('input', ({ target }) => {
    realValue = target.value * k[firstCurrency.value];
    updateSecond();
});

secondInput.addEventListener('input', ({ target }) => {
    realValue = target.value * k[secondCurrency.value];
    updateFirst();
});
firstCurrency.addEventListener('change', () => {
    realValue = firstInput.value * k[firstCurrency.value];
    updateSecond();
});
secondCurrency.addEventListener('change', () => {
    updateSecond();
});
