import request from 'supertest';
import expressApp from '../app';
import { addNumbers, subtractNumbers, isPrime } from '../services/numbers';

describe('Calculator', () => {

    it('Somar dois numeros', async () => {
        for (let i = 0; i < 10; i++) {
            const value_1 = parseFloat(Math.random().toFixed(2)),
                value_2 = parseFloat(Math.random().toFixed(2)),
                r = value_1 + value_2;

            const result = await request(expressApp).post('/add').send({ value_1, value_2 });
            expect(result.status).toBe(200)
            expect(result.body.result).toBe(r)
        }
    });

    it('Subtrair dois numeros', async () => {
        for (let i = 0; i < 10; i++) {
            const value_1 = parseFloat(Math.random().toFixed(2)),
                value_2 = parseFloat(Math.random().toFixed(2)),
                r = value_1 - value_2;

            const result = await request(expressApp).post('/subtract').send({ value_1, value_2 });
            expect(result.status).toBe(200)
            expect(result.body.result).toBe(r)
        }
    });

    it('Numeros primos', async () => {
        const range = [
            { value: 100, result: 25, status: 200 },
            { value: 1000, result: 168, status: 200 },
            { value: 10000, result: 1229, status: 200 },
            { value: 12345, result: 1474, status: 200 },
            { value: 20000, result: 2262, status: 200 },
            { value: 30000, result: 3245, status: 200 },
            { value: 40000, result: 4203, status: 200 },
            { value: 50000, result: 5133, status: 200 },
            { value: 'asdf', result: undefined, status: 500 }
        ]
        for (const r of range) {
            const result = await request(expressApp).get('/primes/' + r.value).send();
            expect(result.status).toBe(r.status)
            expect(result.body.primeCount).toBe(r.result)
        }
    });

})