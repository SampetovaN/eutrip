'use strict';

(function () {
  var ACTIVE_ITEM_TAG = 'tourinfo__item--active';
  var ACTIVE_BUTTON_TAG = 'tourinfo__button--active';
  var HIDDEN_TAG = 'visually-hidden';
  var ESCAPE_BUTTON = 'Escape';
  var REGEX_ANCOR = /#.*/gi;
  var BUTTON_BUY = 'popup-button';
  var tourInfoButtons = document.querySelectorAll('.tourinfo__button');
  var tourInfoItems = document.querySelectorAll('.tourinfo__item');
  var POPUP_CLASS = '.buy';
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

  var isClosestPopupTag = function (item) {
    return item.closest(POPUP_CLASS);
  };

  var focusBlock = function (block) {
    block.tabIndex = 1;
    block.focus();
  };
  var unfocusBlock = function (block) {
    block.tabIndex = 0;
  };

  window.utils = {
    ACTIVE_ITEM_TAG: ACTIVE_ITEM_TAG,
    ACTIVE_BUTTON_TAG: ACTIVE_BUTTON_TAG,
    REGEX_ANCOR: REGEX_ANCOR,
    HIDDEN_TAG: HIDDEN_TAG,
    BUTTON_BUY: BUTTON_BUY,
    isEscEvent: isEscEvent,
    changeCountryInfo: changeCountryInfo,
    getArray: getArray,
    findItem: findItem,
    isClosestPopupTag: isClosestPopupTag,
    focusBlock: focusBlock,
    unfocusBlock: unfocusBlock
  };

})();
