import Popup from "./Popup";

class PopupChangeProfileImage extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputElement = this._form.querySelector(".modal__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const avatarUrl = this._inputElement.value;

      if (avatarUrl) {
        this._handleFormSubmit({ avatarUrl });
      } else {
        console.error("Avatar URL is empty");
      }
    });
  }

  open() {
    super.open();
    this._inputElement.value = "";
  }
}

export default PopupChangeProfileImage;
