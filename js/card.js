'use strict';

(function () {
  var map = document.querySelector('.map');
  // var activePin = map.querySelector('.map__pin--active');
  var cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.map__card');
  

  var renderTypeCard = function (array) {
    if (array = 'flat') {
      return 'Квартира';
    } else if (array = 'bungalo') {
      return 'Бунгало';
    } else if (array = 'house') {
      return 'Дом';
    } else if (array = 'palace') {
      return 'Дворец';
    }
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
    };
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

  var renderCard = function (ad) {
    var cardElement = cardTemplate.cloneNode(true);
    var cardFeatures = cardElement.querySelector('.popup__features');
    var cardPhotos = cardElement.querySelector('.popup__photos');
    var cardClose = cardElement.querySelector('.popup__close');

    cardElement.querySelector('.popup__title').textContent = ad.offer.title;
    cardElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    cardElement.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
    cardElement.querySelector('.popup__type').textContent = renderTypeCard(ad.offer.type);
    cardElement.querySelector('.popup__text--capacity').textContent = renderRooms(ad.offer.rooms) + renderGuests(ad.offer.guests);
    cardElement.querySelector('.popup__text--time').textContent = 'Заезд после '+ ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
    cardElement.querySelector('.popup__description').textContent = ad.offer.description;
    cardElement.querySelector('.popup__avatar').src = ad.author.avatar;
    
    cardClose.addEventListener('mousedown', onCardCloseClick);
    document.addEventListener('keydown', onCardCloseKeydown);

    // var onCardCloseClick = function (evt) {
    //   if (evt.button === window.constants.LEFT_BUTTON) {
    //     removeOpenCard();
    //   }
    // }

    // var onCardCloseKeydown = function (evt) {
    //   if (evt.key === window.constants.ESCAPE) {
    //     removeOpenCard();
    //   }
    // }

    // var removeOpenCard = function () {
    //   cardElement.remove();
    //   if (activePin) {
    //     activePin.classList.remove('map__pin--active');
    //   }

    //   document.removeEventListener('keydown', onCardCloseKeydown);
    // }

    renderFeatures(ad.offer.features, cardFeatures);
    renderPhotos(ad.offer.photos, cardPhotos);

    return cardElement;
  };

  // var getFragment = function () {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < ads.length; i++) {
  //     fragment.appendChild(renderCard(ads[i]));
  //   }
  //   map.insertBefore(fragment, filtersContainer);
  // }
  // getFragment();

  window.card = {
    renderCard: renderCard,
    // getFragment: getFragment
  }
})();
