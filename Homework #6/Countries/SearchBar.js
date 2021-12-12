export function createSearchBar(draw) {
    let searchBar = document.createElement('div');
    searchBar.classList.add('searchBar');

    let searchField = document.createElement('input');

    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    searchButton.addEventListener('click', () =>
        draw(searchField.value.toLowerCase())
    );

    searchBar.append(searchField, searchButton);
    return searchBar;
}
