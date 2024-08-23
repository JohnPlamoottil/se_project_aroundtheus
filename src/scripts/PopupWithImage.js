import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._cardImage = this._popupElement.querySelector(
      "#javascript-preview__image"
      // ".modal__image-preview"
    );
    this.cardTitle = this._popupElement.querySelector(
      "#javascript-image-preview-card-title"
      // ".modal__image-title"
    );
    // //this._popupElement;
    // //this._image = document.getElementById("javascript-preview__image");
    // this._image = this._popupElement.querySelector(
    //   ".javascript-preview__image"
    // );
    // // this._caption = this._popupElement.querySelector(".modal__image-title");
  }

  open({ name, link }) {
    this._cardImage.src = link;
    this._cardImage.alt = name;
    this._cardTitle.textContent = name;
    this._caption.textContent = name;
    super.open();
  }
}
