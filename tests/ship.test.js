const Ship = require('../src/ship');

describe('ship constructor', () => {
    let itinerary
    let ship
    let southampton
    let dover
    let portStub
    beforeEach(() => {
        portStub = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
        };

        southampton = {
            ...portStub,
            name: 'southampton',
            ship: []
        };

        dover = {
            ...portStub,
            name: 'dover',
            ship: []
        };

        itinerary = {
            ports: [southampton, dover]
        };

        ship = new Ship(itinerary);
    });

    it('returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it('sets the starting port property', () => {
        expect(ship.currentPort).toEqual(southampton);
    });

    it('gets added to port on instantiation', () => {
        expect(southampton.addShip).toHaveBeenCalledWith(ship);
    });

    describe('boarding function', () => {

        it('takes a passenger and adds it to the ship passenger property', () => {
            ship.boarding('Holly');
            expect(ship.passengers).toEqual(['Holly']);
        });

        it('can take multiple passengers', () => {
            ship.boarding('Holly, Mo');
            expect(ship.passengers).toEqual(['Holly', 'Mo'])
        });
    });

    describe('set sail function', () => {

        beforeEach(() => {
            ship.setSail();
            });

            it('removes current port from ship when it sets sail', () => {
                expect(ship.currentPort).toBeFalsy();

            });

            it('adds previous port oject to ships previous port property', () => {
                expect(ship.previousPort).toBe(southampton);
            })

            it('removes the ship object from the port obect when set sail is called', () => {
                expect(southampton.removeShip).toHaveBeenCalledWith(ship);
            });

            it('cannot sail beyond itinerary', () => {
                ship.dock()
                expect(() => ship.setSail()).toThrow('End of itinerary reached');
            });
    });

    describe('dock function', () => {

        beforeEach(() => {
            ship.setSail();
            ship.dock();
        });

        it('can dock the ship at a new port', () => {
            expect(ship.currentPort).toBe(dover);
        });

        it('adds ship to port object when dock function is called', () => {
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });
    });
});