'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var roomQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');
  var adType = adForm.querySelector('#type');
  var adPrice = adForm.querySelector('#price');
  var adTimeIn = adForm.querySelector('#timein');
  var adTimeOut = adForm.querySelector('#timeout');

  var onFormChange = function () {
    if (roomQuantity.value === '1' && guestQuantity.value === '2' ||
    roomQuantity.value === '1' && guestQuantity.value === '3' ||
    roomQuantity.value === '1' && guestQuantity.value === '0') {

      guestQuantity.setCustomValidity('Только одно спальное место!');
    } else if (roomQuantity.value === '1' && guestQuantity.value === '1') {
      guestQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === '2' && guestQuantity.value === '3' ||
    roomQuantity.value === '2' && guestQuantity.value === '0') {

      guestQuantity.setCustomValidity('Только два спальных места!');
    } else if (roomQuantity.value === '2' && guestQuantity.value === '2' ||
    roomQuantity.value === '2' && guestQuantity.value === '1') {
      guestQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === '3' && guestQuantity.value === '0') {

      guestQuantity.setCustomValidity('Только три спальных места!');
    } else if (roomQuantity.value === '3' && guestQuantity.value === '3' ||
    roomQuantity.value === '3' && guestQuantity.value === '2' ||
    roomQuantity.value === '3' && guestQuantity.value === '1') {
      guestQuantity.setCustomValidity('');
    }

    if (roomQuantity.value === '100' && guestQuantity.value === '3' ||
    roomQuantity.value === '100' && guestQuantity.value === '2' ||
    roomQuantity.value === '100' && guestQuantity.value === '1') {

      guestQuantity.setCustomValidity('Нежилое помещение');
    } else if (roomQuantity.value === '100' && guestQuantity.value === '0') {
      guestQuantity.setCustomValidity('');
    }
  };

  var onTypeChange = function () {
    if (adType.value === 'bungalo') {
      adPrice.step = '10';
      adPrice.placeholder = '0';
    } else if (adType.value === 'flat') {
      adPrice.min = '1000';
      adPrice.placeholder = '1000';
    } else if (adType.value === 'house') {
      adPrice.min = '5000';
      adPrice.step = '5000';
    } else if (adType.value === 'palace') {
      adPrice.min = '10000';
      adPrice.placeholder = '10000';
      adPrice.step = '5000';
    }
  };

  var onTimeInChange = function () {
    if (adTimeIn.value === '12:00') {
      adTimeOut.options[0].selected = true;
    } else if (adTimeIn.value === '13:00') {
      adTimeOut.options[1].selected = true;
    } else if (adTimeIn.value === '14:00') {
      adTimeOut.options[2].selected = true;
    }
  };

  var onTimeOutChange = function () {
    if (adTimeOut.value === '12:00') {
      adTimeIn.options[0].selected = true;
    } else if (adTimeOut.value === '13:00') {
      adTimeIn.options[1].selected = true;
    } else if (adTimeOut.value === '14:00') {
      adTimeIn.options[2].selected = true;
    }
  };

  adForm.addEventListener('submit', function (evt) {
    window.upload(new FormData(adForm), function (response) {
      window.start.getStartPage();
    });
    evt.preventDefault();
  });

  adType.addEventListener('change', onTypeChange);
  adTimeIn.addEventListener('change', onTimeInChange);
  adTimeOut.addEventListener('change', onTimeOutChange);

  window.form = {
    onFormChange: onFormChange,
  };
})();
