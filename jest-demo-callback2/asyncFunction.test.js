import asyncFunction from './asyncFunction.js';

test('asyncFunction doubles the input value', done => {
    function callback(error, result) {
        if (error) {
            done(error); // Помилка в колбеку - помилка в тесті
            return;
        }
        try {
            expect(result).toBe(6); // Перевіряємо, чи результат вірний
            done(); // Повідомляємо Jest, що тест завершено
        } catch (error) {
            done(error); // Якщо тест не пройшов, повідомляємо Jest про помилку
        }
    }

    asyncFunction(3, callback); // Викликаємо асинхронну функцію з колбеком
});
