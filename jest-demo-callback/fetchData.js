export default fetchData;

function fetchData(callback) {
    setTimeout(() => {
        callback(null, 'peanut butter');
    }, 1000);
}
