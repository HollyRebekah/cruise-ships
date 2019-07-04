function Ship (port) {
    this.passengers = []
    this.currentPort = port
}; 

Ship.prototype = { 

    boarding: function (name) {
        const nameArray = name.split(', ');
        this.passengers = this.passengers.concat(nameArray);
        },
    
    setSail: function () {
        this.currentPort = undefined;
    },

    dock: function (newPort) {
        this.currentPort = newPort;
    }
};

module.exports = Ship
