'use strict';

var WIDTH_PIN = 65;
var WIDTH_PIN_TIP = 22;
var LEFT_BUTTON = 0;
var ENTER = 'Enter';

var QUANTITY_ADS = 8;
var AD_ADDRESS = '350, 340';
var AD_PRICE_MIN = 0;
var AD_PRICE_MAX = 10000;
var AD_GUESTS_ROOMS_MIN = 1;
var AD_GUESTS_ROOMS_MAX = 3;
var AD_TITLES = ['Двухкомнатная квартира с видом на океан!', 'Трехкомнатная квартира для семейного отдыха', 'Роскошные апартаменты'];
var AD_TYPES = ['palace', 'flat', 'house', 'bungalo'];
var ADS_CHECK = ['12:00', '13:00', '14:00'];
var AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var AD_DESCRIPTIONS = ['Все необходимые удобства и красивый вид из окна.', 'Удобное месторасположение, рядом исторический музей и ТРЦ.'];
var AD_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var ads = [];
var map = document.querySelector('.map');
var mapPins = map.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');
var filtersContainer = map.querySelector('.map__filters-container');
var cardTemplate = document.querySelector('#card')
.content
.querySelector('.map__card');
var adForm = document.querySelector('.ad-form');
var fieldsDisabled = document.querySelectorAll('fieldset');
var mapFilters = document.querySelector('.map__filters');
var blockSelects = mapFilters.querySelectorAll('select');
var mapPinMain = mapPins.querySelector('.map__pin--main');

var inputAddress = adForm.querySelector('input[name=address]'); // строка адреса
var roomQuantity = adForm.querySelector('#room_number');
var guestQuantity = adForm.querySelector('#capacity');

var mapPinX = Math.round(mapPinMain.offsetLeft + WIDTH_PIN / 2);
var mapPinY = Math.round(mapPinMain.offsetTop + WIDTH_PIN / 2);

var getStartPage = function () {
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.setAttribute('disabled', 'disabled');

  for (var f = 0; f < fieldsDisabled.length; f++) {
    fieldsDisabled[f].setAttribute('disabled', 'disabled');
  }
  for (var s = 0; s < blockSelects.length; s++) {
    blockSelects[s].setAttribute('disabled', 'disabled');
  }
  inputAddress.value = 'left: ' + mapPinX + '; top: ' + mapPinY + ';';
}; // деактивированная карта

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
        address: AD_ADDRESS,
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

var renderPin = function (ad) {
  var pinElement = pinTemplate.cloneNode(true);
  var imgChange = pinElement.querySelector('img');
  pinElement.style = 'left: ' + (ad.location.x - WIDTH_PIN / 2) + 'px; top: ' + (ad.location.y - WIDTH_PIN) + 'px';
  imgChange.src = ad.author.avatar;
  imgChange.alt = ad.offer.title;

  return pinElement;
}; // шаблон метки объявления

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < ads.length; j++) {
    fragment.appendChild(renderPin(ads[j]));
  }
  mapPins.appendChild(fragment);
}; // функция отрисовки объявления MAP

var getActivation = function () {
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.removeAttribute('disabled');
  for (var r = 0; r < fieldsDisabled.length; r++) {
    fieldsDisabled[r].removeAttribute('disabled');
  }
  for (var b = 0; b < blockSelects.length; b++) {
    blockSelects[b].removeAttribute('disabled');
  }
  getFragment();
}; // функция активации

var searchAddress = function () {
  var tipPinY = Math.round(mapPinMain.offsetTop + WIDTH_PIN + WIDTH_PIN_TIP);
  inputAddress.value = 'left: ' + mapPinX + '; top: ' + tipPinY + ';';

};

mapPinMain.addEventListener('mousedown', function (evt) {
  if (evt.button === LEFT_BUTTON) {
    getActivation();
    searchAddress();
  }
}); // активация через мышь

mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER) {
    getActivation();
    searchAddress();
  }
}); // активация через энтр

// слушатель формы
adForm.addEventListener('change', function () {
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
});

getAds(); // вызов функции создания массива, просто чтобы работала
getStartPage(); // деактивированная карта по умолчанию
