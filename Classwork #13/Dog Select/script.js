let dogSelect = document.getElementById('dogSelect');
let dogImg = document.getElementById('dogImg');

dogSelect.addEventListener('change', handleDogChange);

function handleDogChange({ target }) {
    let getImg = fetch(
        `https://dog.ceo/api/breed/${target.value}/images/random`
    );
    getImg
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dogImg.src = data.message;
        })
        .catch(() => {
            alert("Can't load new image, please try later");
        });
}
