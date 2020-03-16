'use strict';

(function () {
  var map = document.querySelector('.map');
  var filtersContainer = map.querySelector('.map__filters-container');

  var cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.map__card');

  var renderTypeCard = function (arr) {
    if (arr === 'flat') {
      return 'Квартира';
    } else if (arr === 'bungalo') {
      return 'Бунгало';
    } else if (arr === 'house') {
      return 'Дом';
    }
    return 'Дворец';
  };

  var renderRooms = function (array) {
    if (array === 1) {
      return array + ' комнатa для ';
    }
    return array + ' комнаты для ';
  };

  var renderGuests = function (array) {
    if (array === 1) {
      return array + ' гостя';
    }
    return array + ' гостей';
  };

  var renderFeatures = function (array, elem) {
    elem.innerHTML = '';
    for (var f = 0; f < array.length; f++) {
      var featuresElem = document.createElement('li');
      featuresElem.classList.add('popup__feature');
      featuresElem.classList.add('popup__feature--' + array[f]);
      elem.appendChild(featuresElem);
    }
    if (array.length === 0) {
      elem.remove();
    }
  };

  var renderPhotos = function (array, elem) {
    var cardPhotosTemplate = elem.querySelector('img');
    elem.innerHTML = '';

    for (var o = 0; o < array.length; o++) {
      var cardPhotosImg = cardPhotosTemplate.cloneNode(true);
      cardPhotosImg.src = array[o];
      elem.appendChild(cardPhotosImg);
    }
    if (array.length === 0) {
      elem.remove();
    }
  };

  var onCardCloseClick = function (evt) {
    if (evt.button === window.constants.LEFT_BUTTON) {
      closePopup();
    }
  };

  var onCardCloseKeydown = function (evt) {
    if (evt.key === window.constants.ESCAPE) {
      closePopup();
    }
  };

  var renderCard = function (ad) {
    var card = cardTemplate.cloneNode(true);
    var cardFeatures = card.querySelector('.popup__features');
    var cardPhotos = card.querySelector('.popup__photos');
    var cardClose = card.querySelector('.popup__close');

    card.querySelector('.popup__title').textContent = ad.offer.title;
    card.querySelector('.popup__text--address').textContent = ad.offer.address;
    card.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
    card.querySelector('.popup__type').textContent = renderTypeCard(ad.offer.type);
    card.querySelector('.popup__text--capacity').textContent = renderRooms(ad.offer.rooms) + renderGuests(ad.offer.guests);
    card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    card.querySelector('.popup__description').textContent = ad.offer.description;
    card.querySelector('.popup__avatar').src = ad.author.avatar;

    cardClose.addEventListener('click', onCardCloseClick);
    document.addEventListener('keydown', onCardCloseKeydown);

    renderFeatures(ad.offer.features, cardFeatures);
    renderPhotos(ad.offer.photos, cardPhotos);

    return card;
  };

  var showCard = function (ad) {
    if (map.querySelector('.map__pin--active')) {
      map.querySelector('.map__pin--active').classList.remove('map__pin--active');
    }

    map.insertBefore(renderCard(ad), filtersContainer);
  };

  var closePopup = function () {
    var card = map.querySelector('.popup');
    if (card) {
      card.remove();
      map.querySelector('.map__pin--active').classList.remove('map__pin--active');
      document.removeEventListener('keydown', onCardCloseKeydown);
    }
  };

  window.card = {
    show: showCard,
    closePopup: closePopup,
  };
})();
