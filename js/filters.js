'use strict';

(function () {
  var filters = document.querySelector('.map__filters');
  var filtersHouse = filters.querySelector('#housing-type');

  var defaultFilterValue = 'any';

  //   filtersHouse.addEventListener('change', function () {
  //     window.messages.deleteCardsPins();
  //   });

  var getfilterType = function (ads) {
    return ads.filter(function (ad) {
      return filtersHouse.value !== defaultFilterValue ? ad.offer.type === filtersHouse.value : ad.offer.type;
    }).slice(0, window.pin.MAX_QUANTITY_ADS);
  };

  window.filters = {
    getfilterType: getfilterType,
  };
})();
