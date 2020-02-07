'use strict'

var IMG_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];
var AD_TYPES = ['palace', 'flat', 'house', 'bungalo']
var AD_ROOMS = [1, 2, 3, 4, 5];
var AD_GUESTS = [1, 2, 3, 4, 5];
var ADS_CHECKIN = ['12:00', '13:00', '14:00'];
var ADS_CHECKOUT = ['12:00', '13:00', '14:00'];
var AD_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var AD_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var ads = [];
var quantityAds = 8;
var pageHeading = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin')
.content
.querySelector('.map__pin');

pageHeading.classList.remove('map--faded');


var getRandomNumber = function (adArr) {
  return Math.floor(Math.random() * adArr.length);
};

var getRandomNumberMinMax = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var arrAdsСreation = function () {
  for (var i = 0; i < quantityAds; i++) {
    ads[i] =  {
      'author': {
        'avatar': 'img/avatars/user0' + IMG_NUMBERS[i] + '.png'
      },
      'offer': {
        'title': '',
        'address': 'location.x, location.y',
        'price': '',
        'type': AD_TYPES[getRandomNumber(AD_TYPES)],
        'rooms': AD_ROOMS[getRandomNumber(AD_ROOMS)],
        'guests': AD_GUESTS[getRandomNumber(AD_GUESTS)],
        'checkin': ADS_CHECKIN[getRandomNumber(ADS_CHECKIN)],
        'checkout': ADS_CHECKOUT[getRandomNumber(ADS_CHECKOUT)],
        'features': AD_FEATURES.length = getRandomNumber(AD_FEATURES),
        'description': '',
        'photos': AD_PHOTOS.length = getRandomNumber(AD_PHOTOS),
      },
      'location': {
        'x': getRandomNumberMinMax(0, 1200),
        'y': getRandomNumberMinMax(0, 630),
      }
    };
  }
  return ads[i];
};

var renderElement = function () {
  var element = document.createElement('div');
  
};