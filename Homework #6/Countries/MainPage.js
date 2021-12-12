import { createCountryListItem } from './CountryListItem.js';

export function createMainPage(data) {
    let list = document.createElement('ul');
    list.classList.add('CountryList');
    data.forEach((country) => {
        let newElement = createCountryListItem(country);
        list.append(newElement);
    });
    return list;
}
