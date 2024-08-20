import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    //this._popupElement;
    //this._image = document.getElementById("javascript-preview__image");
    this._image = this._popupElement.querySelector(
      ".javascript-preview__image"
    );
    // this._caption = this._popupElement.querySelector(".modal__image-title");
  }
  open({ name, link }) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }
}
