'use strict';

(function () {
  var buySuccessPopup = document.querySelector('.buy--success');
  var buyPopup = document.querySelector('.buy--info');
  var closeButton = document.querySelector('.buy__button--success');
  var main = document.querySelector('.main');
  if (buySuccessPopup && closeButton && main) {
    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onClickCloseButton);
    };
    var onClickCloseButton = function () {
      buySuccessPopup.classList.add(window.utils.HIDDEN_TAG);
      main.removeEventListener('click', onClickCloseButton);

      closeButton.removeEventListener('click', onClickCloseButton);
      window.utils.unfocusBlock(buySuccessPopup);
      window.scrollBlock.unset();
    };
    var showUploadSuccess = function () {
      if (buyPopup && !buyPopup.classList.contains(window.utils.HIDDEN_TAG)) {
        buyPopup.classList.add(window.utils.HIDDEN_TAG);
        window.scrollBlock.unset();
      }
      window.scrollBlock.set();
      buySuccessPopup.classList.remove(window.utils.HIDDEN_TAG);
      document.addEventListener('keydown', onEscKeyDown);
      closeButton.addEventListener('click', onClickCloseButton);
      main.addEventListener('click', onClickCloseButton);
      window.utils.focusBlock(buySuccessPopup);
    };
    window.message = {
      showUploadSuccess: showUploadSuccess
    };
  }
})();
