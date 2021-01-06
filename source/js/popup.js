'use strict';

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
