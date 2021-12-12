import { getData } from './Data.js';
import { getPageDrawer } from './PageDrawer.js';

let data = await getData('https://restcountries.com/v3.1/all');

let drawPage = getPageDrawer(data);

drawPage();
