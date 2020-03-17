'use strict';

(function () {

  var MIN_PRICE = 10000;
  var MAX_PRICE = 50000;

  var filters = document.querySelector('.map__filters');
  var filtersHouse = filters.querySelector('#housing-type');
  var filterPrice = filters.querySelector('#housing-price');
  var filterRooms = filters.querySelector('#housing-rooms');
  var filterGuests = filters.querySelector('#housing-guests');

  var defaultFilterValue = 'any';

  // Функция фильтрации, вызывается в info
  var getFilters = function (ads) {

    var filterHouse = ads.filter(function (ad) {
      return filtersHouse.value !== defaultFilterValue ? ad.offer.type === filtersHouse.value : ad.offer.type;
    });

    var priceFilter = filterHouse.filter(function (ad) {
      if (filterPrice.value === 'low') {
        return ad.offer.price < MIN_PRICE;
      } else if (filterPrice.value === 'middle') {
        return ad.offer.price >= MIN_PRICE && ad.offer.price < MAX_PRICE;
      } else if (filterPrice.value === 'high') {
        return ad.offer.price >= MAX_PRICE;
      } else if (filterPrice.value === defaultFilterValue) {
        return ad.offer.type;
      }
      return true;
    });

    var roomsFilter = priceFilter.filter(function (ad) {
      return filterRooms.value !== defaultFilterValue ? ad.offer.rooms === parseInt(filterRooms.value, 10) : ad.offer.rooms;
    });

    var guestsFilter = roomsFilter.filter(function (ad) {
      return filterGuests.value !== defaultFilterValue ? ad.offer.guests === parseInt(filterGuests.value, 10) : ad.offer.guests;
    });

    var getFeaturesFilter = function () {
      var filterFeatures = Array.from(filters.querySelectorAll('input[type=checkbox]:checked'));
      return guestsFilter.filter(function (ad) {
        return filterFeatures.every(function (featuresValue) {
          return ad.offer.features.includes(featuresValue.value);
        });
      });
    };

    return getFeaturesFilter();
  };

  window.filters = {
    getOffers: getFilters,
  };
})();
