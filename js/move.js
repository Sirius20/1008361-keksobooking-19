'use strict';

(function () {

  var X_MIN = 0;
  var X_MAX = 1200;
  var Y_MIN = 130;
  var Y_MAX = 630;

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var inputAddress = document.querySelector('#address');

  // ограничитель движения метки по карте
  var limitPinMove = function (min, max, current) {
    if (current < min) {
      return min;
    } else if (current > max) {
      return max;
    }

    return current;
  };

  var onPinMainMouseDown = function (evt) {

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onPinMainMouseMove = function (moveEvt) {

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var PinMainY = mapPinMain.offsetTop - shift.y;
      var PinMainX = mapPinMain.offsetLeft - shift.x;

      var left = limitPinMove((X_MIN - Math.round(window.constants.WIDTH_PIN / 2)), (X_MAX - Math.round(window.constants.WIDTH_PIN / 2)), PinMainX);
      var top = limitPinMove((Y_MIN - window.constants.HEIGHT_PIN_TIP), (Y_MAX - window.constants.HEIGHT_PIN_TIP), PinMainY);

      mapPinMain.style.top = top + 'px';
      mapPinMain.style.left = left + 'px';

      inputAddress.value = (left + Math.round(window.constants.WIDTH_PIN / 2)) + ', ' + (top + window.constants.HEIGHT_PIN_TIP);
    };

    var onPinMainMouseUp = function () {

      document.removeEventListener('mousemove', onPinMainMouseMove);
      document.removeEventListener('mouseup', onPinMainMouseUp);

    };

    document.addEventListener('mousemove', onPinMainMouseMove);
    document.addEventListener('mouseup', onPinMainMouseUp);
  };

  mapPinMain.addEventListener('mousedown', onPinMainMouseDown);

  window.move = {
    onPinMainMouseDown: onPinMainMouseDown,
  };

})();
