const Ship = require('../src/ship');

describe('constructor', () => {
    let ship
    beforeEach(() => {
        ship = new Ship ('Southampton')
    });
    
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('initializes with an empty array of passengers', () => {
        expect(ship.passengers).toEqual([]);
    });

    it('sets the starting point property', () => {
        expect(ship.startingPoint).toEqual('Southampton');
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