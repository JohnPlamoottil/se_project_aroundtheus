export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".modal__close");

    console.log(this._popupCloseBtn);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
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
