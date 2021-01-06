'use strict';

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
