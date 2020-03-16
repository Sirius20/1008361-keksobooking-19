'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var adForm = document.querySelector('.ad-form');
  var fileChooser = adForm.querySelector('.ad-form__field input[type=file]');
  var preview = adForm.querySelector('.ad-form-header__preview');

  var onChooserChange = function (evt) {
    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase(); 
    console.log(fileName);

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
    console.log(matches);
    
    if (matches) {
      var reader = new FileReader();
        
      reader.addEventListener('load', function () {
        preview.src = reader.result;
        console.log(preview.src);
      });
        
      reader.readAsDataURL(file);
    }
  };

  fileChooser.addEventListener('change', onChooserChange);

})();
