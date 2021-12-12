import { createElement } from './Element.js';

export function createCountryPage(country) {
    console.log('Country Page Created');
    let countryPage = document.createElement('div');
    countryPage.append('Here should be some cool page created by using following data');
    for (let [key, value] of Object.entries(country)) {
        let child = createElement(key, value);
        countryPage.append(child);
    }
    return countryPage;
}
