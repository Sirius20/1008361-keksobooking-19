'use strict';

(function () {
  var filters = document.querySelector('.map__filters');
  var mapPins = document.querySelector('.map__pins');

  // Удаление открытой карточки и меток
  var deleteCardsPins = function () {
    window.card.closePopup();
    var block = mapPins.querySelector('div[name="pins"]');

    if (block !== null) {
      mapPins.removeChild(block);
    }
  };

  var onSuccess = function (data) {
    window.pin.render(window.filters.getFilters(data));
    filters.classList.remove('ad-form--disabled');
    deleteCardsPins();

    filters.addEventListener('change', function () {
      deleteCardsPins();
      window.pin.render(window.filters.getFilters(data));
    });
  };

  var onError = function (errorMessage) {
    window.messages.showErrorPopup(errorMessage);
  };

  window.info = {
    onSuccess: onSuccess,
    onError: onError,
    deleteCardsPins: deleteCardsPins,
  };
})();
