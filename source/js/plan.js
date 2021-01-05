'use strict';

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
    };
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
    };
    var onClosePopup = function () {
      buyPopup.classList.add(HIDDEN_TAG);
      plansList.addEventListener('click', function (evt) {
        isPlanButtonClickEvent(evt);
      });
    };
    plansList.addEventListener('click', function (evt) {
      isPlanButtonClickEvent(evt);
    });
  }
})();
