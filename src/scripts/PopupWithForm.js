import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    console.log(popupSelector);
    // this._popupForm = this._popupElement.querySelector(".modal__form");
    // this._handleFormSubmit = handleFormSubmit;
    // this._inputValues = this._popupForm.querySelectorAll(".modal__input");
  }

  // _getInputValues() {
  //   const inputData = {};
  //   inputValues.forEach((input) => {});
  //   return inputData;
  // }

  // setEventListeners() {
  //   this._popupForm.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     this._handleFormSubmit(this._getInputValues());
  //     this._popupForm.reset();
  //   });
  //   super.setEventListeners();
  // }

  // close() {
  //   this._popupForm.reset();
  //   super.close();
  // }
}

// index.js

// const newCardPopup = new PopupWithForm("#javascript-add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
