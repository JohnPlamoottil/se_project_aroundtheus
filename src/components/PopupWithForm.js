import { data } from "autoprefixer";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    // this._popup = document.querySelector(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._button = this._popupElement.querySelector(".modal__button");
    this._inputValues = [
      ...this._popupElement.querySelectorAll(".modal__input"),
    ];
    this._handleFormSubmit = handleFormSubmit;
  }
  // = replacing and assigning this value for something new
  _getInputValues() {
    const inputValues = {};
    this._inputValues.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setInputValues(data) {
    this._inputValues.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });

    super.setEventListeners();
  }

  setButtonText(isLoading) {
    if (isLoading) {
      this._button.textContent = "Saving...";
    } else {
      this._button.textContent = "Save";
    }
  }

  resetForm() {
    this._popupForm.reset();
  }
}
