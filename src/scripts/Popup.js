export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(
      popupSelector == "#javascript-add-card-modal"
        ? "#javascript-add-card-close-modal"
        : popupSelector == "#javascript-profile-edit-modal"
        ? "#javascript-profile-close-modal"
        : "#javascript-image-preview-close-modal"
    );
    console.log(this._popupCloseBtn);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("mousedown", this.__handleClickOutside);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener(
      "mousedown",
      this.__handleClickOutside
    );
  }

  __handleClickOutside(event) {
    if (event.target.classList.contains("modal_opened")) {
      this.close();
    }
  }

  _handleEscClose = (evt) => {
    console.log(evt.key);
    if (evt.key === "Escape") {
      console.log("is this firing?");
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => this.close());
    // solve for closing popup when clicking outside shaded area
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close();
      }
    });
  }
}
