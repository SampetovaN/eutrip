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
