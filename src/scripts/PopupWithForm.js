import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputValues = this._form.querySelectorAll(".modal__imput");
  }

  _getInputValues() {
    const inputData = {};
    inputValues.forEach((input) => {});
    return inputData;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
    });
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

// index.js

const newCardPopup = new PopupWithForm("#javascript-add-card-modal", () => {});
newCardPopup.open();

newCardPopup.close();
