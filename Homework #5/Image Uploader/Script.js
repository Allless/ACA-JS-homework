let uploadButton = document.getElementById('upload');
let img = document.getElementById('output');

function handleFileLoad({ target }) {
    console.log(target.files[0], URL.createObjectURL(target.files[0]));
    img.src = URL.createObjectURL(target.files[0]);
}

uploadButton.addEventListener('change', handleFileLoad);
