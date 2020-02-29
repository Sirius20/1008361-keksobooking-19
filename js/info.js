'use strict';

(function () {

  var mapFilters = document.querySelector('.map__filters');
  var houseType = mapFilters.querySelector('#housing-type');
  var checkCollect = houseType.querySelectorAll('checked');
  var ads = [];

  var successHandler = function (data) {
    ads = data;
    window.pin.render(ads);
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

  window.info = {
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
