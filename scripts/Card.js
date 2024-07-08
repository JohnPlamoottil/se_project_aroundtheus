export default class Card {
  constructor({ name, link }, cardSelector, expand) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._expand = expand;
  }

  // testMethod() {
  //   console.log(this.name);
  // }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._trashButton = this._cardElement.querySelector(".card__trash-image");
    //does this have the funcitonality for deleting? no because something is different

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._trashButton.addEventListener("click", () => {
      // this._handleTrashIcon("click-trash"); instead of this function, you need to create and call a different one, which will remove the card!
      this._handleCardDelete();
    });

    this._cardImage.addEventListener("click", () => {
      this._expand({
        name: this._name,
        link: this._link,
      });
    });

    //""
    // const deleteButton = this._cardElement.querySelector(
    //   ".card__delete-button"
    // );
    // alert("You did it!");
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  _handleCardDelete() {
    this._cardElement.remove();
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    // FIND IMAGE INSIDE THE CARD ELEMENT AND SET THE CORRECT SOURCE TO THE IMAGE AND DO SAME FOR TITLE AND ALT for screenreaders for blind people
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    //return the card
    return this._cardElement;
  }
}
