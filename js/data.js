'use strict';

(function () {

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var filtersContainer = map.querySelector('.map__filters-container');

  var successHandler = function (ads) {
    var fragment = document.createDocumentFragment();
    var fragmentTwo = document.createDocumentFragment();
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(window.pin.renderPin(ads[i]));
      fragmentTwo.appendChild(window.card.renderCard(ads[2]));
    }
    mapPins.appendChild(fragment);
    map.insertBefore(fragmentTwo, filtersContainer);
  };

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

  window.data = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };

  // var getRandomNumber = function (adArr) {
  //   return Math.floor(Math.random() * adArr.length);
  // };

  // var getRandomNumberMinMax = function (min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // var getRandomLength = function (arr) {
  //   var arrLength = [];
  //   for (var t = 0; t < getRandomNumber(arr); t++) {
  //     arrLength[t] = arr[t];
  //   }

  //   return arrLength;
  // };
})();
