'use strict';

var QUANTITY_ADS = 8;
var WIDTH_PIN = 65;
var AD_PRICE_MIN = 0;
var AD_PRICE_MAX = 10000;
var AD_GUESTS_ROOMS_MIN = 1;
var AD_GUESTS_ROOMS_MAX = 5;
var AD_TITLES = ['Двухкомнатная квартира с видом на океан!', 'Трехкомнатная квартира для семейного отдыха', 'Роскошные апартаменты'];
var AD_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var ADS_CHECK = ['12:00', '13:00', '14:00'];
var AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var AD_DESCRIPTIONS = ['Все необходимые удобства и красивый вид из окна.', 'Удобное месторасположение, рядом исторический музей и ТРЦ.'];
var AD_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var adAddress = '350, 340';
var ads = [];
var map = document.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');

map.classList.remove('map--faded');


var getRandomNumber = function (adArr) {
  return Math.floor(Math.random() * adArr.length);
};

var getRandomNumberMinMax = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomLength = function (arr) {
  var arrLength = [];
  for (var t = 0; t < getRandomNumber(arr); t++) {
    arrLength[t] = arr[t];
  }

  return arrLength;
};

var getAds = function () {
  for (var i = 0; i < QUANTITY_ADS; i++) {
    ads[i] = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: AD_TITLES[getRandomNumber(AD_TITLES)],
        address: adAddress,
        price: getRandomNumberMinMax(AD_PRICE_MIN, AD_PRICE_MAX),
        type: AD_TYPES[getRandomNumber(AD_TYPES)],
        rooms: getRandomNumberMinMax(AD_GUESTS_ROOMS_MIN, AD_GUESTS_ROOMS_MAX),
        guests: getRandomNumberMinMax(AD_GUESTS_ROOMS_MIN, AD_GUESTS_ROOMS_MAX),
        checkin: ADS_CHECK[getRandomNumber(ADS_CHECK)],
        checkout: ADS_CHECK[getRandomNumber(ADS_CHECK)],
        features: getRandomLength(AD_FEATURES),
        description: AD_DESCRIPTIONS[getRandomNumber(AD_DESCRIPTIONS)],
        photos: getRandomLength(AD_PHOTOS),
      },
      location: {
        x: getRandomNumberMinMax(0, map.offsetWidth),
        y: getRandomNumberMinMax(130, 630),
      }
    };
  }
  return ads[i];
};

getAds();

var renderPin = function (ad) {
  var pinElement = pinTemplate.cloneNode(true);
  var imgChange = pinElement.querySelector('img');
  pinElement.style = 'left: ' + (ad.location.x - WIDTH_PIN / 2) + 'px; top: ' + (ad.location.y - WIDTH_PIN) + 'px';
  imgChange.src = ad.author.avatar;
  imgChange.alt = ad.offer.title;

  return pinElement;
};

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < ads.length; j++) {
    fragment.appendChild(renderPin(ads[j]));
  }
  mapPins.appendChild(fragment);
  return mapPins;
};

getFragment();

