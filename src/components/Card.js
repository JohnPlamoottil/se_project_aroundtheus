export default class Card {
  // update the constructor to accept the delete click handler
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    expand,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._expand = expand;
    this._handleDeleteClick = handleDeleteClick;
    this.id = _id;
    this.isLiked = isLiked;
    this._handleLikeClick = handleLikeClick;
  }
  //private fields has ._ BUT public fields do not

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._trashButton = this._cardElement.querySelector(".card__trash-image");
    //does this have the funcitonality for deleting? no because something is different

    this._likeButton.addEventListener("click", () => {
      //call a function from index.js that makes the api call to like or unlike the card
      this._handleLikeClick(this);
    });

    this._trashButton.addEventListener("click", () => {
      // this._handleTrashIcon("click-trash"); instead of this function, you need to create and call a different one, which will remove the card!
      // Call the delete clikc handler that was passed as argument to constructor
      this._handleDeleteClick(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._expand({
        name: this._name,
        link: this._link,
      });
    });
  }

  handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  // make this method public
  // call it remove or removeCard
  removeCardFromDom() {
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
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button_is-active");
    }
    //return the card
    return this._cardElement;
  }
}
