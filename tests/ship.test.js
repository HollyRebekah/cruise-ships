const Ship = require('../src/ship');
const Itinerary = require('../src/itinerary');

describe('ship constructor', () => {
    let itinerary
    let ship
    let port
    let dover
    beforeEach(() => {
        const portStub =  {
           removeShip: jest.fn(),
           addShip: jest.fn(),
        };

        port = {
            ...portStub,
            name: 'port',
            ship: []
        };

        dover = {
            ...portStub,
            name: 'dover',
            ship: []
        }

        itinerary = new Itinerary (port);
        ship= new Ship(itinerary);
    });
    
    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('sets the starting port property', () => {
        expect(ship.currentPort).toEqual(port);
    });

    it('gets added to port on instantiation',() => {
       expect(port.addShip).toHaveBeenCalledWith(ship);
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
        ship.setSail();
    })

    it('removes port from ship when it sets sail', () => {
        expect(ship.currentPort).toBeFalsy();
    });

    it('removes the ship object from the port obect when set sail is called', () => {
        expect(port.removeShip).toHaveBeenCalledWith(ship);
    });

});

describe('dock function', () => {

    beforeEach(() => {
        ship.dock(dover);
    });

    it('can dock the ship at a new port', () => {
        expect(ship.currentPort).toBe(dover);
    });

    it('adds ship to port object when dock function is called', () => {
        expect(dover.addShip).toHaveBeenCalledWith(ship);
    })

    });

})