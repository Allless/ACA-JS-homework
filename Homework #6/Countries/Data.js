export async function getData(url) {
    console.log('fetching')
    let rs = await fetch(url);
    let data = await rs.json();
    data = Object.values(data);
    return data;
}
