function Port (name) {
    this.name = name
    this.ships = []
};

Port.prototype = {

    addShip: function (ship) {
        this.ships.push(ship);
    },

    removeShip: function (ship) {
        const indexOfShip = this.ships.indexOf(ship)
        this.ships.splice(indexOfShip,1)
    }
};

module.exports = Port
