/* eslint-disable func-names */
(function exportController() {
  function Controller(ship) {
    this.initialiseSea();
    this.ship = ship;
    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
    });
  }

  Controller.prototype = {
    initialiseSea: function () {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];

      let backgroundCounter = 0;

      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundCounter % backgrounds.length]}')`;
        backgroundCounter += 1;
      }, 500);
    },

    renderPorts: function (ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    },

    renderShip: function () {
      const ship = this.ship;
      const shipCurrentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipCurrentPortIndex}']`);
      const shipElement = document.querySelector('#ships');
      shipElement.style.top = `${portElement.offsetTop + 20 }px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },

    setSail: function () {
      const ship = this.ship;
      const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
      const nextPortElement = document.querySelector(`[data-port-index= '${nextPortIndex}']`);
      if (!nextPortElement) {
        this.renderMessageBox('End of the line!');
      } else {
        this.renderMessageBox(`Now departing ${ship.currentPort.name}`);
      }

      const shipElement = document.querySelector('#ships');

      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === (nextPortElement.offsetLeft - 32)) {
          ship.currentPort = ship.itinerary.ports[nextPortIndex];
          ship.previousPort = ship.itinerary.ports[nextPortIndex - 1];
          clearInterval(sailInterval);
        }

        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    },

    renderMessageBox: function (message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;
      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);
      setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
