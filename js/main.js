'use strict';

var IMG_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
var AD_TITLES = ['Двухкомнатная квартира с видом на океан!', 'Трехкомнатная квартира для семейного отдыха', 'Роскошные апартаменты'];
var AD_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var ADS_CHECK = ['12:00', '13:00', '14:00'];
var AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var AD_DESCRIPTIONS = ['Все необходимые удобства и красивый вид из окна.', 'Удобное месторасположение, рядом исторический музей и ТРЦ.'];
var AD_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var QUANTITY_ADS = 8;
var WIDTH_PIN = 65;

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
var featLen = getRandomNumberMinMax(1, 6);
var photLen = getRandomNumberMinMax(1, 3);

AD_FEATURES.length = featLen;
AD_PHOTOS.length = photLen;

var arrAdsСreation = function () {
  for (var i = 0; i < QUANTITY_ADS; i++) {
    ads[i] = {
      author: {
        avatar: 'img/avatars/user0' + IMG_NUMBERS[i] + '.png'
      },
      offer: {
        title: AD_TITLES[getRandomNumber(AD_TITLES)],
        address: '350, 350',
        price: getRandomNumberMinMax(2000, 6000),
        type: AD_TYPES[getRandomNumber(AD_TYPES)],
        rooms: getRandomNumberMinMax(1, 5),
        guests: getRandomNumberMinMax(1, 8),
        checkin: ADS_CHECK[getRandomNumber(ADS_CHECK)],
        checkout: ADS_CHECK[getRandomNumber(ADS_CHECK)],
        features: AD_FEATURES,
        description: AD_DESCRIPTIONS[getRandomNumber(AD_DESCRIPTIONS)],
        photos: AD_PHOTOS,
      },
      location: {
        x: map.offsetWidth,
        y: getRandomNumberMinMax(130, 630),
      }
    };
  }
  return ads[i];
};

arrAdsСreation();

console.log(ads);

var renderPin = function (ad) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.style = 'left:' + ad.location.x - WIDTH_PIN / 2; + 'top:' + ad.location.y - WIDTH_PIN;
  pinElement.src = ad.author.avatar;
  pinElement.alt = ad.title;

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
console.log(getFragment());
