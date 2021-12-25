export default function filterData(data, filter) {
    if (filter === 'All') return data;

    return data.filter((toDo) => toDo?.status === filter);
}
