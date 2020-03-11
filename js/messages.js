'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var mapPins = document.querySelector('.map__pins');

  var getMessageTemplate = function (messageType) {
    var messageTemplate = document.querySelector('#' + messageType).content.querySelector('.' + messageType);
    var message = messageTemplate.cloneNode(true);
    message.setAttribute('name', 'message');
    return message;
  };

  var deleteCardsPins = function () {
    window.card.closePopup();
    var block = mapPins.querySelector('div[name="pins"]');
    mapPins.removeChild(block);
  };

  var onMessageDelete = function () {
    var message = document.querySelector('div[name="message"]');
    if (message) {
      message.remove();
    }
  };

  var popupMessageClose = function () {
    var message = document.querySelector('div[name="message"]');
    document.addEventListener('keydown', onDocumentKeydownClose);
    message.addEventListener('click', onMessageDelete);
  };

  var onDocumentKeydownClose = function (evt) {
    if (evt.key === window.constants.ESCAPE) {
      onMessageDelete();
    }
    document.removeEventListener('keydown', onDocumentKeydownClose);
  };

  var errorMessage = function (messageText) {
    var messageError = getMessageTemplate('error');
    messageError.querySelector('.error__message').textContent = messageText;
    document.querySelector('main').insertAdjacentElement('afterbegin', messageError);
    var errorButton = messageError.querySelector('.error__button');
    errorButton.addEventListener('click', function () {
      onMessageDelete();
    });
  };

  // Помощник, выполняющий отправку данных формы на сервер
  var onFormSubmit = function (evt) {
    evt.preventDefault();
    window.upload(new FormData(adForm), showSuccessPopup, showErrorPopup);
  };

  // Помошник, выполняющийся после успешной отправки данных формы
  var showSuccessPopup = function () {
    document.querySelector('main').insertAdjacentElement('afterbegin', getMessageTemplate('success'));
    popupMessageClose();
    window.form.resetPage();
  };

  // Помошник, обрабатывающий ошибки отправки данных формы на сервер
  var showErrorPopup = function (response) {
    errorMessage(response);
    popupMessageClose();
    window.form.resetPage();
  };

  window.messages = {
    onFormSubmit: onFormSubmit,
    deleteCardsPins: deleteCardsPins,
  };

})();
