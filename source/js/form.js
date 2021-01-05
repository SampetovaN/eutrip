'use strict';

(function () {
  var TAG_ERROR = 'field--error';
  var inputs = document.querySelectorAll('.field input');
  if (inputs) {
    var checkInput = function (input, closest) {
      if (input.validity.patternMismatch) {
        closest.classList.add(TAG_ERROR);
      } else {
        closest.classList.remove(TAG_ERROR);
      }
    };
    inputs.forEach(function (input) {
      input.addEventListener('input', function (evt) {
        checkInput(input, evt.target.closest('.field'));
      });
    });
  }
})();
