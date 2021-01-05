'use strict';

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
