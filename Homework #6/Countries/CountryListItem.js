import { createElement } from './Element.js';
import { createCountryPage } from './CountryPage.js';
import { updateContent } from './Updater.js';

export function createCountryListItem(country) {
    let container = document.createElement('li');
    container.classList.add('CountryContainer');

    let name = createElement('Country Name', country.name.common);
    let officialName = createElement('Official Name', country.name.official);
    let population = createElement('Population', country.population);
    let region = createElement('Region', country.region);

    container.append(name, officialName, population, region);
    container.addEventListener('click', () => {
        let countryPage = createCountryPage(country);
        updateContent(countryPage);
    });

    return container;
}
