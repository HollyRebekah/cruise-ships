const Port = require('../src/port');

describe('port constructor', () => {
    let port
    beforeEach(() => {
        port = new Port('Calais')
    });

    it('returns an object', () => {
        expect(new Port ()).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(port.name).toEqual('Calais')
    })

})