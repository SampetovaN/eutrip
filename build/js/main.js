'use strict';


(function () {
  var COUNTRY_LINK_TAG = 'countries__link';
  var countriesList = document.querySelector('.countries');
  var tourInfoItems = document.querySelectorAll('.tourinfo__item');
  var tourInfoButtons = document.querySelectorAll('.tourinfo__button');
  if (countriesList && tourInfoItems && tourInfoButtons) {
    var isCountryLinkClickEvent = function (evt) {
      if (evt.target.classList.contains(COUNTRY_LINK_TAG)) {
        onClickLink(evt);
      }
    };
    var preprocessLinkHref = function (hrefLink) {
      var ancor = hrefLink.match(window.utils.REGEX_ANCOR)[0];
      return ancor.slice(1);
    };
    var findButton = function (href, button) {
      return button.id === href;
    };
    var onClickLink = function (evt) {
      window.utils.changeCountryInfo();
      var href = preprocessLinkHref(evt.target.href);
      var buttonNewActive = window.utils.getArray(tourInfoButtons).filter(function (button) {
        return findButton(href, button);
      })[0];
      if (buttonNewActive) {
        buttonNewActive.classList.add(window.utils.ACTIVE_BUTTON_TAG);
      }
      var itemNewActive = window.utils.getArray(tourInfoItems).filter(function (item) {
        return window.utils.findItem(href, item);
      })[0];

      if (itemNewActive) {
        itemNewActive.classList.add(window.utils.ACTIVE_ITEM_TAG);
      }
    };

    countriesList.addEventListener('click', function (evt) {
      isCountryLinkClickEvent(evt);
    });
  }

})();



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
  var BUTTON_BUY = 'popup-button';
  var buttonBuyZone = document.querySelector('.map-zone');
  var buyPopup = document.querySelector('.buy--info');
  var phoneInputPopup = document.querySelector('#phone-buy');
  if (buttonBuyZone && buyPopup) {
    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onClosePopup);
    };

    var isBuyButtonClickEvent = function (evt) {
      if (evt.target.classList.contains(BUTTON_BUY)) {
        onClickBuyButton();
      }
    };
    var onClickBuyButton = function () {
      buyPopup.classList.remove(HIDDEN_TAG);

      document.addEventListener('keydown', onEscKeyDown);
      var closePopup = document.querySelector('.buy__button');
      if (closePopup) {
        closePopup.addEventListener('click', onClosePopup);
      }
      buttonBuyZone.removeEventListener('click', function (evt) {
        isBuyButtonClickEvent(evt);
      });
      if (phoneInputPopup) {
        phoneInputPopup.focus();
      }
    };
    var onClosePopup = function () {
      buyPopup.classList.add(HIDDEN_TAG);
      buttonBuyZone.addEventListener('click', function (evt) {
        isBuyButtonClickEvent(evt);
      });
    };
    buttonBuyZone.addEventListener('click', function (evt) {
      isBuyButtonClickEvent(evt);
    });
  }
})();



(function () {
  var BUTTON_TAG = 'tourinfo__button';
  var tourInfoButtonsList = document.querySelector('.tourinfo__list-name');
  var tourInfoItems = document.querySelectorAll('.tourinfo__item');
  if (tourInfoButtonsList && tourInfoItems) {
    var isTourinfoButtonClickEvent = function (evt) {
      if (evt.target.classList.contains(BUTTON_TAG)) {
        if (!evt.target.classList.contains(window.utils.ACTIVE_BUTTON_TAG)) {
          onClickButton(evt);
        }
      }
    };

    var onClickButton = function (evt) {
      window.utils.changeCountryInfo();
      evt.target.classList.add(window.utils.ACTIVE_BUTTON_TAG);
      var itemNewActive = Array.from(tourInfoItems).filter(function (item) {
        return window.utils.findItem(evt.target.id, item);
      })[0];

      if (itemNewActive) {
        itemNewActive.classList.add(window.utils.ACTIVE_ITEM_TAG);
      }
    };

    tourInfoButtonsList.addEventListener('click', function (evt) {
      isTourinfoButtonClickEvent(evt);
    });
  }

})();



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
