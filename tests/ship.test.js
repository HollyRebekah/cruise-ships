const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship constructor', () => {
    let port
    let itinerary
    let ship
    beforeEach(() => {
        port = new Port ('Southampton')
        itinerary = new Itinerary (port)
        ship= new Ship(itinerary)
    });
    
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('sets the starting port property', () => {
        expect(ship.currentPort).toEqual(port);
    });

    it('gets added to port on instantiation',() => {
       expect(port.ships).toContain(ship);
    });

describe('boarding function', () => {

    it('takes a passenger and adds it to the ship passenger property', () => {
        ship.boarding('Holly');
        expect(ship.passengers).toEqual(['Holly']);
    });

    it('can take multiple passengers', () => {
        ship.boarding('Holly, Mo');
        expect(ship.passengers).toEqual(['Holly','Mo'])
    })
});

describe ('set sail function', () => {

    beforeEach(() => {
        ship.setSail()
    })

    it('removes port from ship when it sets sail', () => {
        expect(ship.currentPort).toBeFalsy();
    });

    it('removes the ship object from the port obect when set sail is called', () => {
        expect(port.ships).not.toContain(ship);
    });

});

describe('dock function', () => {

    beforeEach(() => {
        ship.dock(port)
    });

    it('can dock the ship at a new port', () => {
        expect(ship.currentPort).toBe(port);
    });

    it('adds ship to port object when dock function i called', () => {
        expect(port.ships).toContain(ship)
    })

    });

})