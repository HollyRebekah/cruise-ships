/* eslint-disable func-names */
(function exportController() {
  function Controller() {
    this.initialiseSea();
  }

  Controller.prototype = {
    initialiseSea: function () {
      const backgrounds = [
        './images/water0.png',
        '/images/water1.png',
      ];

      let backgroundCounter = 0;

      window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundCounter % backgrounds.length]}')`;
        backgroundCounter += 1;
      }, 1000);
    },
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
