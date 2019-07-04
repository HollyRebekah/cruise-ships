const Ship = require('../src/ship');
const Port = require('../src/port');

describe('ship constructor', () => {
    let ship
    let port
    beforeEach(() => {
        port = new Port ('Southampton')
        ship = new Ship (port)
    });
    
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('initializes with an empty array of passengers', () => {
        expect(ship.passengers).toEqual([]);
    });

    it('sets the starting port property', () => {
        expect(ship.currentPort).toEqual(port);
    });
});

describe('boarding function', () => {
    let ship
    beforeEach(() => {
        ship = new Ship('Southampton')
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
    let port
    beforeEach(() => {
        port = new Port ('Southampton');
        ship = new Ship(port);
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
    beforeEach(() => {
        southampton = new Port ('Southampton');
        calais = new Port ('Calais');
        ship = new Ship (southampton);
    });

    it('can dock the ship at a new port', () => {
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});

