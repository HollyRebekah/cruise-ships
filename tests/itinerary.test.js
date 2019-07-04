const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
    let itinerary = new Itinerary ()

    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it ('initializes wih an empty array of ports', () => {
        expect(itinerary.ports).toEqual([]);
    });
});