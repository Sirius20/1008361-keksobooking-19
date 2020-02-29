'use strict';

(function () {
  var pinCard = document.querySelector('#card')
  .content
  .querySelector('.map__card');

  var renderCard = function (ad) {
    cardElement = pinCard.cloneNode(true);
    cardElement.querySelector('.popup__title').value = ad.offer.title;
    cardElement.querySelector('.popup__text--address').value = ad.offer.address;
    cardElement.querySelector('.popup__text--price').value = ad.offer.price;
    cardElement.querySelector('.popup__type').value = ad.offer.type;
    cardElement.querySelector('.popup__text--capacity').value = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + 'гостей';
    cardElement.querySelector('.popup__text--time').value = 'Заезд после '+ ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    cardElement.querySelector('.popup__features').value = ad.offer.features;
    cardElement.querySelector('.popup__description').value = ad.offer.description;
    cardElement.querySelector('.popup__photos').img.src = ad.offer.photos;
    cardElement.querySelector('.popup__avatar').img.src = ad.author.avatar;
  
    return cardElement;
  };

  var getFragment = function (ads) {
    var fragment = document.createDocumentFragment();
    var newElement = document.createElement('div');
    newElement.className = 'map__card';
    for (var i = 0; i < ads.length; i++) {
      newElement.textContent = renderCard(ads[i]);
    }
    fragment.appendChild(newElement);
  }
  window.card = {
    renderCard: renderCard,
    getFragment: getFragment
  }
})();
