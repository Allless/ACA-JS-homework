export function createElement(key, value) {
    let line = document.createElement('div');
    line.classList.add('CountryContainerRow');

    let left = document.createElement('div');
    let right = document.createElement('div');

    left.innerText = key + ':';
    left.classList.add('CountryRowLeft');

    right.innerText = value;
    right.classList.add('CountryRowRight');

    line.append(left, right);

    return line;
}
