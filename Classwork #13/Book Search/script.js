let searchButton = document.getElementById('searchButton');
let input = document.getElementById('input');
let searchResult = document.getElementById('searchResultList');
let footer = document.getElementById('footer');

input.addEventListener('keydown', logKey);
searchButton.addEventListener('click', () => handleSearch(input.value));

function logKey(e) {
    if (e.code == 'Enter') {
        handleSearch(input.value);
    }
}

function handleSearch(input, page = 1) {
    if (input) {
        let postURL = input.replace(' ', '+');
        let getData = fetch(
            `http://openlibrary.org/search.json?q=${postURL}&page=${page}`
        );
        addLoadingMessage(input, searchResult);

        getData
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                showSearchResult(data, input);
            });
    }
}

function showSearchResult(data, input) {
    let pagesCount = Math.ceil(data.numFound / 100);
    drawFooter(pagesCount, input);

    searchResult.innerHTML = `Pages Found: ${data.numFound}`;
    for ({
        author_name,
        title,
        first_publish_year,
        subject,
        key,
    } of Object.values(data.docs)) {
        let firstSubjects = subject ? subject.slice(0, 5) : null;
        let searchItem = createSearchItem(
            author_name,
            title,
            first_publish_year,
            firstSubjects,
            key
        );
        searchResult.appendChild(searchItem);
    }
}

function createSearchItem(authorName, title, year, subjects, key) {
    let item = document.createElement('li');
    let inner = document.createElement('a');
    myText = `Title : ${title} \nauthor : ${authorName} \nyear : ${year}`;
    if (subjects) {
        myText += `\nsubjects : ${subjects.join(', ')}`;
    }
    inner.innerText = myText;
    inner.href = 'http://openlibrary.org/' + key;
    item.appendChild(inner);
    return item;
}

function addLoadingMessage(text, element) {
    let loadingMessage = document.createElement('p');
    loadingMessage.innerText = `Loading ${text}`;
    if (element.firstChild) {
        if (element.firstChild.nodeName === 'P') {
            element.firstChild = loadingMessage;
            return;
        }
        element.firstChild.before(loadingMessage);
    } else {
        element.append(loadingMessage);
    }
}

function drawFooter(pagesCount, input) {
    footer.innerHTML = '';
    for (let i = 1; i <= pagesCount; i++) {
        let footerLink = document.createElement('div');
        footerLink.innerText = i;
        footerLink.addEventListener('click', () => handleSearch(input, i));
        footer.appendChild(footerLink);
    }
}
