import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    console.log(this._popupElement);

    this._cardImage = this._popupElement.querySelector(
      "#javascript-preview__image"
    );
    this._cardTitle = this._popupElement.querySelector(
      "#javascript-image-preview-card-title"
    );
  }

  open({ name, link }) {
    this._cardImage.src = link;
    this._cardImage.alt = name;
    this._cardTitle.textContent = name;

    super.open();
  }
}
