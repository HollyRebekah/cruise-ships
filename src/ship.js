function Ship (port) {
    this.passengers = []
    this.startingPoint = port
}; 

Ship.prototype = { 

    boarding: function (name) {
        const nameArray = name.split(', ');
        this.passengers = this.passengers.concat(nameArray);
        }
};

module.exports = Ship