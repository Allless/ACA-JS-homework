export function filterCountries(data, search) {
    let filteredData = data.filter((country) => {
        return (
            country.name.official.toLowerCase().includes(search) ||
            country.name.common.toLowerCase().includes(search)
        );
    });
    return filteredData;
}
