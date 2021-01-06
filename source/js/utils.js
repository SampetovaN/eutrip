'use strict';

(function () {
  var ACTIVE_ITEM_TAG = 'tourinfo__item--active';
  var ACTIVE_BUTTON_TAG = 'tourinfo__button--active';
  var ESCAPE_BUTTON = 'Escape';
  var REGEX_ANCOR = /#.*/gi;
  var tourInfoButtons = document.querySelectorAll('.tourinfo__button');
  var tourInfoItems = document.querySelectorAll('.tourinfo__item');
  var isEscEvent = function (evt, action) {
    if (evt.key === ESCAPE_BUTTON) {
      evt.preventDefault();
      action(evt);
    }
  };
  var getButtonActive = function (button) {
    return button.classList.contains(ACTIVE_BUTTON_TAG);
  };
  var getItemActive = function (item) {
    return item.classList.contains(window.utils.ACTIVE_ITEM_TAG);
  };

  var changeCountryInfo = function () {
    var buttonActive = getArray(tourInfoButtons).filter(getButtonActive)[0];
    var itemActive = getArray(tourInfoItems).filter(getItemActive)[0];
    buttonActive.classList.remove(ACTIVE_BUTTON_TAG);
    itemActive.classList.remove(ACTIVE_ITEM_TAG);
  };

  var getArray = function (nodes) {
    return Array.from(nodes);
  };

  var findItem = function (activeItem, item) {
    return item.classList.toString().match(activeItem) ? item : null;
  };

  window.utils = {
    ACTIVE_ITEM_TAG: ACTIVE_ITEM_TAG,
    ACTIVE_BUTTON_TAG: ACTIVE_BUTTON_TAG,
    REGEX_ANCOR: REGEX_ANCOR,
    isEscEvent: isEscEvent,
    changeCountryInfo: changeCountryInfo,
    getArray: getArray,
    findItem: findItem
  };

})();
