import { drawHeader, drawMain, drawFooter } from './Drawers.js';
import { filterCountries } from './Filter.js';

export function getPageDrawer(data) {
    function draw(search = '') {
        let filteredData = filterCountries(data, search);
        drawMain(filteredData, draw);
    }
    drawHeader(draw);
    drawFooter();
    return draw;
}
