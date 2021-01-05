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



(function () {
  var OPENED_MENU = 'main-nav__wrapper--opened';
  var CLOSED_MENU = 'main-nav__wrapper--closed';
  var NOJS_TAG = 'header--nojs';
  var MENUOPENED_TAG = 'content--menu-opened';
  var NEGATIVE_TABINDEX = -1;
  var COMMON_TABINDEX = 0;
  var header = document.querySelector('.header');
  var content = document.querySelector('.content');
  var buttonOpenMenu = document.querySelector('.main-nav__toggle');
  var buttonCloseMenu = document.querySelector('.main-nav__toggle-list');
  var menu = document.querySelector('.main-nav__wrapper');
  var nonMenuInteractiveItems = document.querySelectorAll('input, .main a, .main button, .footer a, .footer button');
  var menuLinks = document.querySelectorAll('.main-nav a');

  if (header) {
    header.classList.remove(NOJS_TAG);
  }
  if (buttonOpenMenu && buttonCloseMenu && menu && content && nonMenuInteractiveItems && menuLinks) {
    var unsetTabindex = function (node) {
      node.tabIndex = NEGATIVE_TABINDEX;
    };
    var setTabindex = function (node) {
      node.tabIndex = COMMON_TABINDEX;
    };
    var setArray = function (items) {
      return [].slice.call(items);
    };
    var closeMenu = function () {
      menu.classList.remove(OPENED_MENU);
      menu.classList.add(CLOSED_MENU);
      buttonOpenMenu.focus();
      buttonOpenMenu.addEventListener('click', onClickButtonOpenMenu);
      document.removeEventListener('keydown', onEscKeyDown);
      content.classList.remove(MENUOPENED_TAG);
      setArray(nonMenuInteractiveItems).forEach(setTabindex);
    };

    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onClickButtonCloseMenu);
    };

    var onClickButtonCloseMenu = function () {
      closeMenu();
    };
    var onClickLinkMenu = function () {
      closeMenu();
    };

    var onClickButtonOpenMenu = function () {
      menu.classList.remove(CLOSED_MENU);
      menu.classList.add(OPENED_MENU);
      buttonCloseMenu.focus();
      buttonCloseMenu.addEventListener('click', onClickButtonCloseMenu);
      document.addEventListener('keydown', onEscKeyDown);
      content.classList.add(MENUOPENED_TAG);
      setArray(nonMenuInteractiveItems).forEach(unsetTabindex);
      setArray(menuLinks).forEach(function (link) {
        link.addEventListener('click', onClickLinkMenu);
      });
    };

    buttonOpenMenu.addEventListener('click', onClickButtonOpenMenu);
  }

})();



(function () {
  var HIDDEN_TAG = 'visually-hidden';
  var BUTTON_PLAN = 'plan__button';
  var plansList = document.querySelector('.price__plans');
  var buyPopup = document.querySelector('.buy--info');
  var phoneInputPopup = document.querySelector('#phone-buy');
  if (plansList && buyPopup) {
    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onClosePopup);
    };

    var isPlanButtonClickEvent = function (evt) {
      if (evt.target.classList.contains(BUTTON_PLAN)) {
        onClickPlanButton();
      }
    }
    var onClickPlanButton = function () {
      buyPopup.classList.remove(HIDDEN_TAG);

      document.addEventListener('keydown', onEscKeyDown);
      var closePopup = document.querySelector('.buy__button');
      if (closePopup) {
        closePopup.addEventListener('click', onClosePopup);
      }
      plansList.removeEventListener('click', function (evt) {
        isPlanButtonClickEvent(evt);
      });
      if (phoneInputPopup) {
        phoneInputPopup.focus();
      }
    }
    var onClosePopup = function () {
      buyPopup.classList.add(HIDDEN_TAG);
      plansList.addEventListener('click', function (evt) {
        isPlanButtonClickEvent(evt);
      });
    }
    plansList.addEventListener('click', function (evt) {
      isPlanButtonClickEvent(evt);
    });
  }
})();



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
