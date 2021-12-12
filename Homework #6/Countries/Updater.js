export function updateContent(content) {
    document.getElementById('root').innerHTML = null;
    document.getElementById('root').append(content);
}
