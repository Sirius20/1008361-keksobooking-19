'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var adForm = document.querySelector('.ad-form');
  var avatarChooser = adForm.querySelector('.ad-form__field input[type=file]');
  var avatarPreview = adForm.querySelector('[class="ad-form-header__preview"] img');
  var photosChooser = adForm.querySelector('.ad-form__upload input[type=file]');
  var photosPreview = adForm.querySelector('.ad-form__photo');

  var onAvatarChooserChange = function (evt) {
    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatarPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
    evt.target.value = '';
  };

  var onPhotosChooserChange = function (evt) {
    var file = evt.target.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        var newImg = document.createElement('img');
        newImg.src = reader.result;
        newImg.width = '70';
        newImg.height = '70';
        photosPreview.appendChild(newImg);
      });

      reader.readAsDataURL(file);
    }
    evt.target.value = '';
  };

  avatarChooser.addEventListener('change', onAvatarChooserChange);
  photosChooser.addEventListener('change', onPhotosChooserChange);

})();
