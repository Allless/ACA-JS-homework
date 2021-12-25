export default function getLocalData(collection) {
    if (localStorage) {
        if (localStorage[collection]) {
            const data = JSON.parse(localStorage[collection]);
            return data;
        }
        localStorage[collection] = [];
        return [];
    }
    return false;
}
