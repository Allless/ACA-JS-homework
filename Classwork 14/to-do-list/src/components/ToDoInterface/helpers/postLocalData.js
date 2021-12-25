export default function postLocalData(data, collection) {
    if (localStorage) {
        localStorage[collection] = JSON.stringify(data);
        return true;
    }
    return false;
}
