import { createMainPage } from './MainPage.js';
import { createSearchBar } from './SearchBar.js';
import { updateContent } from './Updater.js';

function drawHeader(draw) {
    console.log('Header drawn');
    let h1 = document.createElement('h1');
    h1.innerText = 'Im too Lazy to draw cool website';

    let h2 = document.createElement('h2');
    h2.innerText = 'Main Page';
    h2.addEventListener('click', () => draw());

    document.getElementById('content').prepend(h1, h2);
}

async function drawMain(data, draw) {
    console.log('Main drawn');
    let mainPage = document.createElement('div');
    let searchBar = createSearchBar(draw);
    let content = await createMainPage(data);
    mainPage.append(searchBar, content);
    updateContent(mainPage);
}

function drawFooter() {
    console.log('Footer drawn');
    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerText = 'Some Footer;)';
    document.getElementById('content').append(footer);
}
export { drawHeader, drawMain, drawFooter };
