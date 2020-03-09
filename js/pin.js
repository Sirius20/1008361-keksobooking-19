'use strict';

(function () {
  // var MAX_QUANTITY_ADS = 5;

  var map = document.querySelector('.map');
  var mapPins = map.querySelector('.map__pins');
  var pinElement;
  var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

  var renderPin = function (ad) {
    pinElement = pinTemplate.cloneNode(true);
    var imgChange = pinElement.querySelector('img');
    pinElement.style = 'left: ' + (ad.location.x - window.constants.WIDTH_PIN / 2) + 'px; top: ' + (ad.location.y - window.constants.WIDTH_PIN) + 'px';
    imgChange.src = ad.author.avatar;
    imgChange.alt = ad.offer.title;
    
    pinElement.addEventListener('click', onPinClick);
    // pinElement.addEventListener('keydown', onPinKeydown);

    var onPinClick = function () {
      if (map.querySelector('.map__card') !== null) {
        map.querySelector('.map__card').remove();
      }
        window.card.showCard(ad);
    };

    // var onPinKeydown = function (evt) {
    //   if (evt.key === window.constants.ENTER) {
    //     pinElement.classList.add('map__pin--active');
    //     window.card.showCard(ad);
    //   }
    // };

    return pinElement;
  };

  var getFragment = function () {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < window.info.ads.length; j++) {
      fragment.appendChild(renderPin(window.info.ads[j]));
    }
    mapPins.appendChild(fragment);
  };

  // до 7.2
  // var render = function (data) {
  //   var takeNumber = data.length > MAX_QUANTITY_ADS ? MAX_QUANTITY_ADS : data.length;
  //   for (var i = 0; i < takeNumber; i++) {
  //     mapPins.appendChild(renderPin(data[i]));
  //   }
  // }
  window.pin = {
    renderPin: renderPin,
    getFragment: getFragment,
    pinElement: pinElement,
  };
})();
