import getLocalData from '../../ToDoInterface/helpers/getLocalData';

const idGenerator = (() => {
    const data = getLocalData('todolist');
    let lastId = data && data.length ? +data[data.length - 1]._id : -1;
    return () => ++lastId;
})();

export default idGenerator;
