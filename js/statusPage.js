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
  var avatarPreview = adForm.querySelector('[class="ad-form-header__preview"] img');
  var photosPreview = adForm.querySelector('.ad-form__photo');
  var adPrice = adForm.querySelector('#price');
  var resetButton = adForm.querySelector('.ad-form__reset');

  var resetPage = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    adForm.reset();
    mapFilters.reset();
    avatarPreview.src = 'img/muffin-grey.svg';
    photosPreview.innerHTML = '';
    adPrice.placeholder = '1000';
    window.info.deleteCardsPins();
    mapPinMain.style = 'left: ' + window.constants.PIN_START_X + 'px; top: ' + window.constants.PIN_START_Y + 'px;';
    window.map.getStartPage();
  };

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
    window.loader.load(window.info.onSuccess, window.info.onError);
    adForm.addEventListener('submit', window.messages.onFormSubmit);
    mapPinMain.removeEventListener('mousedown', onPinMainClick);
    mapPinMain.removeEventListener('keydown', onPinMainKeydown);
    window.form.addListenerList();
    resetButton.addEventListener('click', onResetButtonClick);
  };

  var searchAddress = function () {
    var tipPinY = Math.round(mapPinMain.offsetTop - window.constants.HEIGHT_PIN_TIP);
    var mapPinX = Math.round(mapPinMain.offsetLeft - window.constants.WIDTH_PIN_MAIN / 2);
    inputAddress.value = mapPinX + ', ' + tipPinY;
  };

  var onPinMainClick = function (evt) {
    if (evt.button === window.constants.LEFT_BUTTON) {
      getActivation();
      searchAddress();
    }
  };

  var onPinMainKeydown = function (evt) {
    if (evt.key === window.constants.ENTER) {
      getActivation();
      searchAddress();
    }
  };

  var onResetButtonClick = function () {
    resetPage();
  };

  window.statusPage = {
    onPinMainClick: onPinMainClick,
    onPinMainKeydown: onPinMainKeydown,
    reset: resetPage,
    onResetButtonClick: onResetButtonClick,
  };
})();
