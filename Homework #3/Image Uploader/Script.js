let uploadButton = document.getElementById('upload');
let img = document.getElementById('output');

function handleFileLoad({ target }) {
    img.src = URL.createObjectURL(target.files[0]);
}

uploadButton.addEventListener('change', handleFileLoad);
