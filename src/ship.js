function Ship (itinerary) {
    this.passengers = [];
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
}; 

Ship.prototype = { 

    boarding: function (name) {
        const nameArray = name.split(', ');
        this.passengers = this.passengers.concat(nameArray);
        },
    
    setSail: function () {
        this.currentPort.removeShip(this)
        this.currentPort = null;
    },

    dock: function (newPort) {
        this.currentPort = newPort;
        this.currentPort.addShip(this)
    }
};

module.exports = Ship;