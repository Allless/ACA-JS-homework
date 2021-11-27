let slideData = [
    'https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg',
    'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_klook_water/activities/t9ur9cc1khkup1dmcbzd/%D0%9F%D0%B0%D1%80%D0%BA%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9IMGWorldsofAdventure.webp',
    'https://under35.me/wp-content/uploads/2016/09/%D0%9F%D0%B0%D1%80%D0%BA-%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B8-IMG-Worlds-of-Adventure-14.jpg',
];
let currentImgIndex = 0;
let img = document.getElementById('slideshow');
img.src = slideData[currentImgIndex];
let nextButton = document.getElementById('slideNext');
let prevButton = document.getElementById('slidePrev');
let iter;

function handleNextClick() {
    clearInterval(iter);
    currentImgIndex = (currentImgIndex + 1) % slideData.length;
    img.src = slideData[currentImgIndex];
    startIter();
}

function handlePrevClick() {
    clearInterval(iter);
    currentImgIndex =
        currentImgIndex === 0
            ? slideData.length - 1
            : (currentImgIndex - 1) % slideData.length;
    img.src = slideData[currentImgIndex];
    startIter();
}

function handleImgChange() {
    currentImgIndex = (currentImgIndex + 1) % slideData.length;
    img.src = slideData[currentImgIndex];
}

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);
function startIter() {
    iter = setInterval(handleImgChange, 2000);
}

startIter();
