const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
    let southampton = jest.fn()
    let itinerary = new Itinerary (southampton)

    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it ('takes a port object for port property', () => {
        expect(itinerary.ports).toEqual([southampton]);
    });
});