let filmList = document.getElementById('filmList');

async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

let data = await getData('https://ghibliapi.herokuapp.com/films/');
data = Object.values(data);

for (let film of data) {
    let listElement = createFilmElement(film);
    filmList.appendChild(listElement);
}

function createFilmElement({
    title,
    description,
    director,
    producer,
    release_date: releaseDate,
}) {
    let filmItem = document.createElement('li');
    let t = createElem('Title', title);
    let ds = createElem('Description', description);
    let dr = createElem('Director', director);
    let pr = createElem('Producer', producer);
    let rd = createElem('Release Date', releaseDate);
    filmItem.append(t, ds, dr, pr, rd);
    return filmItem;
}

function createElem(cls, value) {
    let line = document.createElement('div');
    line.classList.add('FilmDescriptionRow');

    let left = document.createElement('div');
    let right = document.createElement('div');

    left.innerText = cls + ':';
    left.classList.add('FilmDescriptionRowLeft');

    right.innerText = value;
    right.classList.add('FilmDescriptionRowRight');

    line.append(left, right);

    return line;
}
