import Popup from "./Popup";

class ProfileImageEditPopup extends Popup {
  constructor({ popupSelector, onConfirm }) {
    super({ popupSelector });
    this._onConfirm = onConfirm;
    this._confirmBtn = this._popupElement.querySelector(
      ".modal__confirm-button"
    );
  }
  setEventListeners() {
    super.setEventListeners();
    this._confirmBtn.addEventListener("click", () => {
      this._onConfirm();
      this.close();
    });
  }
}

export default ProfileImageEditPopup;
