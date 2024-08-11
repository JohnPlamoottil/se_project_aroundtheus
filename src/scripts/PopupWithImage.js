import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelecter });
    this._popupElement;
    this._image = document.querySelector(".modal__image-preview");
    this._caption = document.querySelector(".modal__image-title");
  }
  open({ name, link }) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }
}
