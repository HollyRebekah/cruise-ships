const Port = require('../src/port');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

describe('port constructor', () => {
    let port
    let ship
    let ship2 
    beforeEach(() => {
        port = new Port('Calais')
        ship = {}
        ship2 = {} 
    });

    it('returns an object', () => {
        expect(port).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(port.name).toEqual('Calais')
    })

    it('has an array for ships property', () => {
        expect(port.ships).toBeInstanceOf(Array);
    })

describe('addShip function', () => {
    beforeEach(() => {
        port.addShip(ship);
    });

    it('adds a ship to the port', () => {
        expect(port.ships).toContain(ship)
    });

    it('can have more than 1 ship', () => {
        port.addShip(ship2)
        expect(port.ships).toContain(ship, ship2);
    });
});

describe('removeShip function', () => {
    it('removes named ship from the port', () => {
        port.addShip(ship);
        port.addShip(ship2);
        port.removeShip(ship);
        expect(port.ships).not.toContain([ship]);
    });
});

});