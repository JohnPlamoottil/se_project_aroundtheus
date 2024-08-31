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

  // close() {
  //   this._popupElement.classList.remove("modal_opened");
  //   document.removeEventListener("keydown", this._handleEscClose);
  // }

  // _handleEscClose = (evt) => {
  //   console.log(evt.key);
  //   if (evt.key === "Escape") {
  //     console.log("is this firing?");
  //     this.close();
  //   }
  // };

  // setEventListeners() {
  //   this._popupCloseBtn.addEventListener("click", () => this.close());
  //   // solve for closing popup when clicking outside shaded area
  //   this._popupElement.addEventListener("click", (event) => {
  //     if (event.target === event.currentTarget) {
  //       this.close();
  //     }
  //   });
  // }
}
