import { addNumbers, subtractNumbers } from '../services/numbers'

describe('Calculator', () => {

    it('Somar dois numeros', async () => {
        for (let i = 0; i < 10; i++) {
            const v1 = parseFloat(Math.random().toFixed(2)),
                v2 = parseFloat(Math.random().toFixed(2)),
                r = v1 + v2;

            const number = addNumbers(v1, v2)
            expect(number).toBe(r)
        }
    });

    it('Subtrair dois numeros', async () => {
        for (let i = 0; i < 10; i++) {
            const v1 = parseFloat(Math.random().toFixed(2)),
                v2 = parseFloat(Math.random().toFixed(2)),
                r = v1 - v2;

            const number = subtractNumbers(v1, v2)
            expect(number).toBe(r)
        }
    });

})