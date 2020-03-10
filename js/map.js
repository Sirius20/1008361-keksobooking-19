'use strict';

(function () {
  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var mapPins = map.querySelector('.map__pins');
  var mapPinMain = mapPins.querySelector('.map__pin--main');

  var onPinMainClick = function (evt) {
    if (evt.button === window.constants.LEFT_BUTTON) {
      window.active.getActivation();
      window.active.searchAddress();
    }
    mapPinMain.removeEventListener('mousedown', onPinMainClick);
  };

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER) {
      window.active.getActivation();
      window.active.searchAddress();
    }
  });

  window.start.getStartPage();
  mapPinMain.addEventListener('mousedown', onPinMainClick);
  adForm.addEventListener('change', window.form.onFormChange);
})();
