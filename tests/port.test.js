const Port = require('../src/port');
const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

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

    it('has an array for ships property', () => {
        expect(port.ships).toEqual([]);
    })

});

describe('addShip function', () => {
    let calais
    let ship
    beforeEach(() => {
        calais = new Port('Calais')
        ship = {}
    });

    it('adds a ship to the port', () => {
        calais.addShip(ship);
        expect(calais.ships).toEqual([ship])
    });
});

describe('removeShip function', () => {
    let calais
    let itinerary
    let ship
    let titanic
    beforeEach(() => {
        calais = new Port ('Calais')
        itinerary = new Itinerary (calais)
        ship = new Ship (itinerary)
        titanic = new Ship(itinerary)
    });

    it('removes named ship from the port', () => {
        calais.addShip(ship);
        calais.addShip(titanic);
        calais.removeShip(ship);
        expect(calais.ships).not.toContain([ship]);
    });
});