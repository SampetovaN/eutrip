'use strict';

(function () {

  var focusTrap = require('focus-trap');
  var setFocusTrap = function (block) {
    return focusTrap.createFocusTrap(block);
  };
  window.focusTrap = {
    set: setFocusTrap
  };
})();
