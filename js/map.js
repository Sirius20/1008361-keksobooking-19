'use strict';

(function () {
  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var fieldsDisabled = document.querySelectorAll('fieldset');
  var mapFilters = document.querySelector('.map__filters');
  var mapPins = map.querySelector('.map__pins');
  var blockSelects = mapFilters.querySelectorAll('select');
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var inputAddress = adForm.querySelector('#address');
  var resetButton = adForm.querySelector('.ad-form__reset');

  var mapPinX = Math.round(mapPinMain.offsetLeft - window.constants.WIDTH_PIN_MAIN / 2);
  var mapPinY = Math.round(mapPinMain.offsetTop - window.constants.WIDTH_PIN_MAIN / 2);

  var getStartPage = function () {
    mapFilters.classList.add('ad-form--disabled');
    mapFilters.setAttribute('disabled', 'disabled');

    for (var f = 0; f < fieldsDisabled.length; f++) {
      fieldsDisabled[f].setAttribute('disabled', 'disabled');
    }
    for (var s = 0; s < blockSelects.length; s++) {
      blockSelects[s].setAttribute('disabled', 'disabled');
    }
    inputAddress.value = mapPinX + ', ' + mapPinY;
    adForm.removeEventListener('submit', window.messages.onFormSubmit);
    mapPinMain.addEventListener('mousedown', window.statusPage.onPinMainClick);
    mapPinMain.addEventListener('keydown', window.statusPage.onPinMainKeydown);
    resetButton.removeEventListener('click', window.statusPage.onResetButtonClick);
    window.form.removeListenerList();
  };

  getStartPage();

  window.map = {
    getStartPage: getStartPage,
  };
})();
