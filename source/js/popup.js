'use strict';

(function () {
  var buttonBuyZone = document.querySelector('.map-zone');
  var buyPopup = document.querySelector('.buy--info');
  var closeButton = document.querySelector('.buy__button--info');
  if (buttonBuyZone && buyPopup) {
    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onCloseButton);
    };
    var isBuyButtonClickEvent = function (evt) {
      if (evt.target.classList.contains(window.utils.BUTTON_BUY)) {
        onClickBuyButton();
      }
    };
    var onClickBuyButton = function () {
      buyPopup.classList.remove(window.utils.HIDDEN_TAG);
      window.scrollBlock.set();
      document.addEventListener('keydown', onEscKeyDown);
      if (closeButton) {
        closeButton.addEventListener('click', onCloseButton);
      }
      window.utils.focusBlock(buyPopup);
      buttonBuyZone.addEventListener('click', onCloseButton);
      buttonBuyZone.removeEventListener('click', isBuyButtonClickEvent);
    };
    var onCloseButton = function () {
      buyPopup.classList.add(window.utils.HIDDEN_TAG);
      window.scrollBlock.unset();
      buttonBuyZone.removeEventListener('click', onCloseButton);
      buttonBuyZone.addEventListener('click', isBuyButtonClickEvent);
      window.utils.unfocusBlock(buyPopup);
    };
    buttonBuyZone.addEventListener('click', isBuyButtonClickEvent);
  }
})();
