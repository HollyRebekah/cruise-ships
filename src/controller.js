/* eslint-disable func-names */
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
