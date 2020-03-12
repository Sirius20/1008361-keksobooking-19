'use strict';

(function () {
  var filters = document.querySelector('.map__filters');
  var filtersHouse = filters.querySelector('#housing-type');
  var ads = [];

  var successHandler = function (data) {
    ads = data;
    filtersHouse.addEventListener('change', function () {
      
      window.messages.deleteCardsPins();
      window.pin.render(window.filters.getfilterType(ads));
      
    });
    
  };
  
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.info = {
    successHandler: successHandler,
    errorHandler: errorHandler
  };
})();
