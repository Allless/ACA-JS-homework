const idGenerator = (() => {
    let id = 0;
    return () => id++;
})();

export default idGenerator;
