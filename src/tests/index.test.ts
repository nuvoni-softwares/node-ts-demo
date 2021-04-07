import { addNumbers, subtractNumbers } from '../services/numbers'

describe('Calculator', () => {

    it('Somar dois numeros', async () => {
        const cep = await addNumbers(4, 6)
        expect(cep).toBe(10)
    });

    it('Subtrair dois numeros', async () => {
        const cep = await subtractNumbers(10, 6)
        expect(cep).toBe(4)
    });
    
})
