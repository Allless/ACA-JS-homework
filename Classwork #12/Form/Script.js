let button = document.getElementById('submitForm');
function handleClick(event) {
    let data = new FormData(event.target.parentElement);
    data = data.entries();
    let obj = {};
    for (let [key, value] of data) {
        obj[key] = value;
    }
    alert(JSON.stringify(obj));
}

button.addEventListener('click', handleClick);
