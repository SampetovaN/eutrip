'use strict';

(function () {
  var OPENED_MENU = 'main-nav__wrapper--opened';
  var CLOSED_MENU = 'main-nav__wrapper--closed';
  var NOJS_TAG = 'header--nojs';
  var MENUOPENED_TAG = 'content--menu-opened';
  var header = document.querySelector('.header');
  var content = document.querySelector('.content');
  var buttonOpenMenu = document.querySelector('.main-nav__toggle');
  var buttonCloseMenu = document.querySelector('.main-nav__toggle-list');
  var menu = document.querySelector('.main-nav__wrapper');
  var trap = window.focusTrap.set(menu);
  var menuLinks = document.querySelectorAll('.main-nav a');

  if (header) {
    header.classList.remove(NOJS_TAG);
  }
  if (buttonOpenMenu && buttonCloseMenu && menu && content && menuLinks) {
    var setArray = function (items) {
      return [].slice.call(items);
    };
    var closeMenu = function () {
      menu.classList.remove(OPENED_MENU);
      menu.classList.add(CLOSED_MENU);
      trap.deactivate();
      buttonOpenMenu.addEventListener('click', onClickButtonOpenMenu);
      document.removeEventListener('keydown', onEscKeyDown);
      content.classList.remove(MENUOPENED_TAG);
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
      trap.activate();
      buttonCloseMenu.addEventListener('click', onClickButtonCloseMenu);
      document.addEventListener('keydown', onEscKeyDown);
      content.classList.add(MENUOPENED_TAG);
      setArray(menuLinks).forEach(function (link) {
        link.addEventListener('click', onClickLinkMenu);
      });
    };

    buttonOpenMenu.addEventListener('click', onClickButtonOpenMenu);
  }

})();
