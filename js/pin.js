'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

  var renderPin = function (ad) {
    var pinElement = pinTemplate.cloneNode(true);
    var imgChange = pinElement.querySelector('img');
    pinElement.style = 'left: ' + (Math.round(ad.location.x - window.constants.WIDTH_PIN / 2)) + 'px; top: ' + (Math.round(ad.location.y - window.constants.WIDTH_PIN)) + 'px';
    imgChange.src = ad.author.avatar;
    imgChange.alt = ad.offer.title;

    return pinElement;
  };

  window.pin = {
    renderPin: renderPin
  };
})();
