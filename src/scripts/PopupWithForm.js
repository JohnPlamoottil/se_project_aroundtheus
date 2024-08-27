import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._popup = document.querySelector(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(e) {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    return formProps;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      this._handleFormSubmit(this._getInputValues(e));
      this.close();
      this._popupForm.reset();
    });

    super.setEventListeners();
  }

  // close() {
  //   this._popupForm.reset();
  //   super.close();
  //   console.log(777);
  // }
}

// index.js

// const newCardPopup = new PopupWithForm("#javascript-add-card-modal", () => {});
// newCardPopup.open();

// newCardPopup.close();
