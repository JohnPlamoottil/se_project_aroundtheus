import Popup from "./Popup";

class CardDeletePopup extends Popup {
  constructor({ popupSelector, onConfirm }) {
    super({ popupSelector });
    this._onConfirm = onConfirm;
    this._confirmButton = this._popupElement.querySelector(
      "#javascript-card-delete-confirm-yes-button"
    );
    this.setEventListeners();
  }

  setEventListeners() {
    super.setEventListeners();

    this._confirmButton.addEventListener("click", () => {
      this._onConfirm();
    });
  }

  setSubmitHandler(handler) {
    this._onConfirm = handler;
  }

  open() {
    super.open();
  }
}

export default CardDeletePopup;
