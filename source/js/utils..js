'use strict';

(function () {
  var ESCAPE_BUTTON = 'Escape';

  var isEscEvent = function (evt, action) {
    if (evt.key === ESCAPE_BUTTON) {
      evt.preventDefault();
      action(evt);
    }
  };

  window.utils = {
    isEscEvent: isEscEvent
  };
})();
