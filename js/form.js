'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var roomQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');

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

  window.form = {
    onFormChange: onFormChange
  };
})();
