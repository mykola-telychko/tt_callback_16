// fetchData.test.js
import fetchData from './fetchData.js';

test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done.fail(error); // Mark the test as failed if there's an error
            return;
        }
        try {
            expect(data).toEqual('peanut butter');
            done(); // Mark the test as successful
        } catch (error) {
            done.fail(error); // Mark the test as failed if there's an assertion error
        }
    }

    fetchData(callback);
});
