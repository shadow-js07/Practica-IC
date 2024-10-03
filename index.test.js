const saludar = require('./index');

describe('saludar function', () => {
    it('debería devolver el saludo correcto', () => {
        expect(saludar()).toBe('¡Hola Mundo!');
    });
});