const Itinerary = require('../src/itinerary');
const Port = require('../src/port');
const Ship = require('../src/ship')

describe('itinerary constructor', () => {
    let southampton = new Port ('Southampton')
    let itinerary = new Itinerary (southampton)

    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it ('takes a port object for port property', () => {
        expect(itinerary.ports).toEqual([southampton]);
    });
});