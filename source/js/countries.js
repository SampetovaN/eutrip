'use strict';

(function () {
  var COUNTRY_LINK_CLASS = '.countries__link';
  var countriesList = document.querySelector('.countries');
  var tourInfoItems = document.querySelectorAll('.tourinfo__item');
  var tourInfoButtons = document.querySelectorAll('.tourinfo__button');
  if (countriesList && tourInfoItems && tourInfoButtons) {
    var isCountryLinkClickEvent = function (evt) {
      var closestLink = evt.target.closest(COUNTRY_LINK_CLASS);
      if (closestLink) {
        onClickLink(closestLink);
      }
    };
    var preprocessLinkHref = function (hrefLink) {
      var ancor = hrefLink.match(window.utils.REGEX_ANCOR)[0];
      return ancor.slice(1);
    };
    var findButton = function (href, button) {
      return button.id === href;
    };
    var onClickLink = function (closestLink) {
      window.utils.changeCountryInfo();
      var href = preprocessLinkHref(closestLink.href);
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
