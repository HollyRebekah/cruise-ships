const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('ship constructor', () => {
    let southampton
    let itinerary
    let titanic 
    beforeEach(() => {
        southampton = new Port ('Southampton')
        itinerary = new Itinerary (southampton)
        titanic = new Ship(itinerary)
    });
    
    it('returns an object', () => {
        expect(titanic).toBeInstanceOf(Object);
    });

    it('sets the starting port property', () => {
        expect(titanic.currentPort).toEqual(southampton);
    });

    it('gets added to port on instantiation',() => {
       expect(southampton.ships).toContain(titanic);
    });
});

describe('boarding function', () => {
    let ship
    let intinerary
    let port
    beforeEach(() => {
        port = new Port ('Southampton');
        itinerary = new Itinerary(port)
        ship = new Ship(itinerary);
    });

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
    let ship
    let itinerary
    let port
    beforeEach(() => {
        port = new Port ('Southampton');
        itinerary = new Itinerary(port)
        ship = new Ship(itinerary);
    });

    it('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    })

});

describe('dock function', () => {
    let southampton
    let ship
    let calais
    let itinerary
    beforeEach(() => {
        southampton = new Port ('Southampton');
        calais = new Port ('Calais');
        itinerary = new Itinerary (southampton);
        ship = new Ship (itinerary);
    });

    it('can dock the ship at a new port', () => {
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });

    it('adds ship to port object when dock function i called', () => {
        ship.dock(calais);
        expect(calais.ships).toContain(ship)
    })
});

