'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');

  // Извлечение щаблона сообщения об успешном размещении объявления
  var getMessageTemplate = function (messageType) {
    var messageTemplate = document.querySelector('#' + messageType).content.querySelector('.' + messageType);
    var message = messageTemplate.cloneNode(true);
    message.setAttribute('name', 'message');
    return message;
  };

  // Функция скрытия сообщений
  var popupMessageClose = function () {
    var message = document.querySelector('div[name="message"]');
    document.addEventListener('keydown', onDocumentKeydownClose);
    message.addEventListener('click', onMessageDelete);
  };

  // Обработчик удаление открытого сообщения
  var onMessageDelete = function () {
    var message = document.querySelector('div[name="message"]');
    if (message) {
      message.remove();
    }
  };

  // Скрытие сообщения по клавише
  var onDocumentKeydownClose = function (evt) {
    if (evt.key === window.constants.ESCAPE) {
      onMessageDelete();
    }
    document.removeEventListener('keydown', onDocumentKeydownClose);
  };

  // Сообщение об ошибке
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
    window.loader.upload(new FormData(adForm), showSuccessPopup, showErrorPopup);
  };

  // Помощник, выполняющийся после успешной отправки данных формы
  var showSuccessPopup = function () {
    document.querySelector('main').insertAdjacentElement('afterbegin', getMessageTemplate('success'));
    popupMessageClose();
    window.statusPage.reset();
  };

  // Помощник, обрабатывающий ошибки отправки данных формы на сервер
  var showErrorPopup = function (response) {
    errorMessage(response);
    popupMessageClose();
    window.statusPage.reset();
  };

  window.messages = {
    onFormSubmit: onFormSubmit,
    showErrorPopup: showErrorPopup,
  };

})();
