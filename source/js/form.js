'use strict';

(function () {
  var TAG_ERROR = 'field--error';
  var inputs = document.querySelectorAll('.field input');
  if (inputs) {
    var checkinput = function (input, closest) {

      if (input.validity.patternMismatch) {
        closest.classList.add(TAG_ERROR);
        input.setCustomValidity('');
      } else {
        closest.classList.remove(TAG_ERROR);
        input.setCustomValidity('');
      }
    };
    inputs.forEach(function (input) {
      input.addEventListener('input', function (evt) {
        checkinput(input, evt.target.closest('.field'));
      });
    });
  }
})();
