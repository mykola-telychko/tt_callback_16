export default asyncFunction;

function asyncFunction(value, callback) {
    setTimeout(() => {
        const result = value * 2;// +
        // const result = value * 4;// provoke error
        callback(null, result);
    }, 1000);
}
