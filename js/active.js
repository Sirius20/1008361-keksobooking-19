'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var adForm = document.querySelector('.ad-form');
  var fieldsDisabled = document.querySelectorAll('fieldset');
  var mapFilters = document.querySelector('.map__filters');
  var blockSelects = mapFilters.querySelectorAll('select');
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var inputAddress = adForm.querySelector('input[name=address]');

  var getFragment = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.data.ads.length; j++) {
      fragment.appendChild(window.pin.renderPin(window.data.ads[j]));
    }
    mapPins.appendChild(fragment);
  };

  var getActivation = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    mapFilters.removeAttribute('disabled');
    for (var r = 0; r < fieldsDisabled.length; r++) {
      fieldsDisabled[r].removeAttribute('disabled');
    }
    for (var b = 0; b < blockSelects.length; b++) {
      blockSelects[b].removeAttribute('disabled');
    }
    getFragment();
  };

  var searchAddress = function () {
    var tipPinY = Math.round(mapPinMain.offsetTop + window.constants.WIDTH_PIN + window.constants.WIDTH_PIN_TIP);
    inputAddress.value = 'left: ' + window.start.mapPinX + '; top: ' + tipPinY + ';';
  };

  window.active = {
    getActivation: getActivation,
    searchAddress: searchAddress
  };
})();
