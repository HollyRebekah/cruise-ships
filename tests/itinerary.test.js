const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

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