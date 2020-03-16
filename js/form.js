'use strict';

(function () {
  // Количество гостей или комнат
  var Quantity = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    NO_GUESTS: '100'
  };

  var Price = {
    FLAT_PRICE: '1000',
    HOUSE_PRICE: '5000',
    PALACE_PRICE: '10000'
  };

  var Time = {
    MIDDAY: '12:00',
    ONE_PM: '13:00',
    TWO_PM: '14:00'
  };

  var map = document.querySelector('.map');
  var adForm = document.querySelector('.ad-form');
  var mapFilters = map.querySelector('.map__filters');
  var mapPins = map.querySelector('.map__pins');
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var roomQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');
  var adType = adForm.querySelector('#type');
  var adPrice = adForm.querySelector('#price');
  var adTimeIn = adForm.querySelector('#timein');
  var adTimeOut = adForm.querySelector('#timeout');
  var resetButton = adForm.querySelector('.ad-form__reset');

  var onFormChange = function () {
    if (roomQuantity.value === Quantity.ONE && guestQuantity.value === Quantity.TWO ||
    roomQuantity.value === Quantity.ONE && guestQuantity.value === Quantity.THREE ||
    roomQuantity.value === Quantity.ONE && guestQuantity.value === '0') {

      roomQuantity.setCustomValidity('Только одно спальное место');
    } else if (roomQuantity.value === Quantity.ONE && guestQuantity.value === Quantity.ONE) {
      roomQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === Quantity.TWO && guestQuantity.value === Quantity.THREE ||
    roomQuantity.value === Quantity.TWO && guestQuantity.value === '0') {

      roomQuantity.setCustomValidity('Только два спальных места');
    } else if (roomQuantity.value === Quantity.TWO && guestQuantity.value === Quantity.TWO ||
    roomQuantity.value === Quantity.TWO && guestQuantity.value === Quantity.ONE) {
      roomQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === Quantity.THREE && guestQuantity.value === '0') {

      roomQuantity.setCustomValidity('Жилое помещение максимум для трёх человек');
    } else if (roomQuantity.value === Quantity.THREE && guestQuantity.value === Quantity.THREE ||
    roomQuantity.value === Quantity.THREE && guestQuantity.value === Quantity.TWO ||
    roomQuantity.value === Quantity.THREE && guestQuantity.value === Quantity.ONE) {
      roomQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === Quantity.NO_GUESTS && guestQuantity.value === Quantity.THREE ||
    roomQuantity.value === Quantity.NO_GUESTS && guestQuantity.value === Quantity.TWO ||
    roomQuantity.value === Quantity.NO_GUESTS && guestQuantity.value === Quantity.ONE) {

      roomQuantity.setCustomValidity('Нежилое помещение');
    } else if (roomQuantity.value === Quantity.NO_GUESTS && guestQuantity.value === '0') {
      roomQuantity.setCustomValidity('');
    }
  };

  var onTypeChange = function () {
    if (adType.value === 'bungalo') {
      adPrice.placeholder = '0';
      adPrice.min = '0';
    } else if (adType.value === 'flat') {
      adPrice.placeholder = Price.FLAT_PRICE;
      adPrice.min = Price.FLAT_PRICE;
    } else if (adType.value === 'house') {
      adPrice.placeholder = Price.HOUSE_PRICE;
      adPrice.min = Price.HOUSE_PRICE;
    } else if (adType.value === 'palace') {
      adPrice.placeholder = Price.PALACE_PRICE;
      adPrice.min = Price.PALACE_PRICE;
    }
  };

  var onTimeInChange = function () {
    if (adTimeIn.value === Time.MIDDAY) {
      adTimeOut.options[0].selected = true;
    } else if (adTimeIn.value === Time.ONE_PM) {
      adTimeOut.options[1].selected = true;
    } else if (adTimeIn.value === Time.TWO_PM) {
      adTimeOut.options[2].selected = true;
    }
  };

  var onTimeOutChange = function () {
    if (adTimeOut.value === Time.MIDDAY) {
      adTimeIn.options[0].selected = true;
    } else if (adTimeOut.value === Time.ONE_PM) {
      adTimeIn.options[1].selected = true;
    } else if (adTimeOut.value === Time.TWO_PM) {
      adTimeIn.options[2].selected = true;
    }
  };

  var resetPage = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    adForm.reset();
    mapFilters.reset();
    adPrice.placeholder = Price.FLAT_PRICE;
    window.messages.deleteCardsPins();
    mapPinMain.style = 'left: ' + window.constants.PIN_START_X + 'px; top: ' + window.constants.PIN_START_Y + 'px;';
    window.start.getStartPage();
    resetButton.removeEventListener('click', resetPage);
  };

  var onResetButtonClick = function () {
    resetPage();
  };

  adForm.addEventListener('change', onFormChange);
  adForm.addEventListener('change', onTypeChange);
  adTimeIn.addEventListener('change', onTimeInChange);
  adTimeOut.addEventListener('change', onTimeOutChange);
  resetButton.addEventListener('click', onResetButtonClick);

  window.form = {
    onFormChange: onFormChange,
    resetPage: resetPage,
  };
})();
