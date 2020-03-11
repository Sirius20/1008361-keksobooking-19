'use strict';

(function () {

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');

  var successHandler = function (ads) {
    var block = document.createElement('div');
    block.setAttribute('name', 'pins');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(window.pin.renderPin(ads[i]));
    }
    block.appendChild(fragment);
    mapPins.appendChild(block);
  };
  // var ads = [];

  // var successHandler = function (data) {
  //   ads = data;
  //   window.pin.render(ads);
  // };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.info = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };
})();
