function Ship (port) {
    this.passengers = []
    this.startingPort = port
}; 

Ship.prototype = { 

    boarding: function (name) {
        const nameArray = name.split(', ');
        this.passengers = this.passengers.concat(nameArray);
        },
    
    setSail: function () {
        this.startingPort = undefined
    }
};

module.exports = Ship