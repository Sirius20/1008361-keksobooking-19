'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var adForm = document.querySelector('.ad-form');
  var fieldsDisabled = Array.from(document.querySelectorAll('fieldset'));
  var mapFilters = document.querySelector('.map__filters');
  var blockSelects = Array.from(mapFilters.querySelectorAll('select'));
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var inputAddress = adForm.querySelector('#address');

  var getActivation = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.removeAttribute('disabled');
    fieldsDisabled.forEach(function (field) {
      field.removeAttribute('disabled');
    });
    blockSelects.forEach(function (select) {
      select.removeAttribute('disabled');
    });
    window.loader.load(window.info.successHandler, window.info.errorHandler);
  };

  var searchAddress = function () {
    var tipPinY = Math.round(mapPinMain.offsetTop - window.constants.HEIGHT_PIN_TIP);
    var mapPinX = Math.round(mapPinMain.offsetLeft - window.constants.WIDTH_PIN_MAIN / 2);
    inputAddress.value = mapPinX + ', ' + tipPinY;
  };

  window.active = {
    getActivation: getActivation,
    searchAddress: searchAddress
  };
})();
