'use strict';

(function () {

  // проверка карточки на работу
  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');

  var successHandler = function (ads) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < ads.length; i++) {
      fragment.appendChild(window.pin.renderPin(ads[i]));
    }
    mapPins.appendChild(fragment);
  };
  // var ads = [];

  // var successHandler = function (data) {
  //   ads = data;
  //   window.pin.render(ads);
  // };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.info = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };
  // var QUANTITY_ADS = 8;
  // var AD_ADDRESS = '350, 340';
  // var AD_PRICE_MIN = 0;
  // var AD_PRICE_MAX = 10000;
  // var AD_GUESTS_ROOMS_MIN = 1;
  // var AD_GUESTS_ROOMS_MAX = 3;
  // var AD_TITLES = ['Двухкомнатная квартира с видом на океан!', 'Трехкомнатная квартира для семейного отдыха', 'Роскошные апартаменты'];
  // var AD_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  // var ADS_CHECK = ['12:00', '13:00', '14:00'];
  // var AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  // var AD_DESCRIPTIONS = ['Все необходимые удобства и красивый вид из окна.', 'Удобное месторасположение, рядом исторический музей и ТРЦ.'];
  // var AD_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  // var ads = [];

  // var getRandomNumber = function (adArr) {
  //   return Math.floor(Math.random() * adArr.length);
  // };

  // var getRandomNumberMinMax = function (min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // var getRandomLength = function (arr) {
  //   var arrLength = [];
  //   for (var t = 0; t < getRandomNumber(arr); t++) {
  //     arrLength[t] = arr[t];
  //   }

  //   return arrLength;
  // };

  // var getAds = function () {
  //   for (var i = 0; i < QUANTITY_ADS; i++) {
  //     ads[i] = {
  //       author: {
  //         avatar: 'img/avatars/user0' + (i + 1) + '.png'
  //       },
  //       offer: {
  //         title: AD_TITLES[getRandomNumber(AD_TITLES)],
  //         address: AD_ADDRESS,
  //         price: getRandomNumberMinMax(AD_PRICE_MIN, AD_PRICE_MAX),
  //         type: AD_TYPES[getRandomNumber(AD_TYPES)],
  //         rooms: getRandomNumberMinMax(AD_GUESTS_ROOMS_MIN, AD_GUESTS_ROOMS_MAX),
  //         guests: getRandomNumberMinMax(AD_GUESTS_ROOMS_MIN, AD_GUESTS_ROOMS_MAX),
  //         checkin: ADS_CHECK[getRandomNumber(ADS_CHECK)],
  //         checkout: ADS_CHECK[getRandomNumber(ADS_CHECK)],
  //         features: getRandomLength(AD_FEATURES),
  //         description: AD_DESCRIPTIONS[getRandomNumber(AD_DESCRIPTIONS)],
  //         photos: getRandomLength(AD_PHOTOS),
  //       },
  //       location: {
  //         x: getRandomNumberMinMax(0, map.offsetWidth),
  //         y: getRandomNumberMinMax(130, 630),
  //       }
  //     };
  //   }
  //   return ads[i];
  // };
  // getAds();

  // window.info = {
  //   ads: ads,
  // };
})();
