'use strict';

(function () {
  var MAX_QUANTITY_ADS = 5;

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

  var renderPin = function (ad) {
    var pinElem = pinTemplate.cloneNode(true);
    var imgChange = pinElem.querySelector('img');
    pinElem.style = 'left: ' + (Math.round(ad.location.x - window.constants.WIDTH_PIN / 2)) + 'px; top: ' + (ad.location.y - window.constants.HEIGHT_PIN) + 'px';
    imgChange.src = ad.author.avatar;
    imgChange.alt = ad.offer.title;

    var openPopup = function () {
      if (map.querySelector('.map__card') !== null) {
        map.querySelector('.map__card').remove();
      }

      window.card.show(ad);
    };

    var onPinClick = function (evt) {
      if (evt.button === window.constants.LEFT_BUTTON) {
        openPopup();
        pinElem.classList.add('map__pin--active');

      }
    };

    var onPinKeydown = function (evt) {
      if (evt.key === window.constants.ENTER) {
        openPopup();
        pinElem.classList.add('map__pin--active');
      }
    };

    pinElem.addEventListener('click', onPinClick);
    pinElem.addEventListener('keydown', onPinKeydown);

    return pinElem;
  };

  var render = window.debounce(function (data) {
    var block = document.createElement('div');
    block.setAttribute('name', 'pins');
    var takeNumber = data.length > MAX_QUANTITY_ADS ? MAX_QUANTITY_ADS : data.length;
    for (var i = 0; i < takeNumber; i++) {
      block.appendChild(renderPin(data[i]));
      mapPins.appendChild(block);
    }
  });

  window.pin = {
    render: render,
    MAX_QUANTITY_ADS: MAX_QUANTITY_ADS,

  };
})();
