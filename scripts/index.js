import Card from "./card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*------------------------------------ELEMENTS---------------------------------*/

//----PROFILE EDIT MODAL---->>
const profileEditModal = document.querySelector(
  "#javascript-profile-edit-modal"
);

//----PROFILE EDIT BUTTON--->>
const profileEditButton = document.querySelector(
  "#javascript-profile-edit-button"
);

//----PROFILE CLOSE MODAL--->>
const profileCloseModal = profileEditModal.querySelector(
  "#javascript-profile-close-modal"
);

//----PROFILE TITLE---->>
const profileTitle = document.querySelector(".profile__title");

//----PROFILE DESCRIPTION------>>
const profileDescription = document.querySelector(".profile__description");

//----PROFILE TITLE INPUT------>>
const profileTitleInput = document.querySelector(
  "#javascript-profile-title-input"
);

//----PROFILE DESCRIPTION INPUT------->>
const profileDescriptionInput = document.querySelector(
  "#javascript-profile-description-input"
);

//-----PROFILE EDIT FORM ---------->>
const profileEditForm = profileEditModal.querySelector(
  "#javascript-modal-edit-form"
); // handlers added at line 245

//----SELECT CARD TEMPLATE AND ELEMENT--->>
const cardTemplate = document.querySelector("#javascript-card-template").content
  .firstElementChild;

const cardListElement = document.querySelector("#javascript-cards__list");

const addCardModal = document.querySelector("#javascript-add-card-modal");
//forms are easier way to find the form
const addCardForm = addCardModal.querySelector(".modal__form");

const newCardTitleInput = addCardForm.querySelector(
  "#javascript-add-card-title-input"
);
const newCardUrlInput = addCardForm.querySelector(
  "#javascript-add-card-description-input"
);

//----PROFILE ADD BUTTON--->>
const profileAddCardButton = document.querySelector(
  "#javascript-profile-add-button"
); //button for adding a card

const addCardModalCloseButton = addCardModal.querySelector(
  "#javascript-add-card-close-modal"
);
//the above code is for closing the modal when clicking button

//---IMAGE PREVIEW MODAL ELEMENTS--->>
const imagePreviewModal = document.querySelector(
  "#javascript-image-preview-modal"
);

const imageClosePreviewModal = document.querySelector(
  "#javascript-image-preview-close-modal"
);

/* -------------------------------------------------------------------------- */
/*                                   objects                                  */
/* -------------------------------------------------------------------------- */
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active",
};

const editProfileFormValidator = new FormValidator(config, profileEditForm);
const addCardFormValidator = new FormValidator(config, addCardForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

/*------------------------------------FUNCTIONS---------------------------------*/

//to open the modal when Edit Button is Clicked
function openPopup(modal) {
  modal.classList.add("modal_opened");

  document.addEventListener("keydown", handleModalCloseEscPressDown);
  modal.addEventListener("mousedown", handleModalCloseMouseClick);
} // end of function

// to close the modal
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleModalCloseEscPressDown);
  modal.removeEventListener("mousedown", handleModalCloseMouseClick);
} // end of function

// ---CLOSE MODALS PRESSING OUTSIDE OF MODAL--->>

/*
paramenter - this takes the event as in a mouse click 
description - closes the modal or popup when clicked outside of box
*/
function handleModalCloseMouseClick(evt) {
  if (evt.target == evt.currentTarget) {
    closePopup(evt.currentTarget);
  } // end of if statement
} // end of this function

//---ADDING INITIAL CARDS--->>

//---CLOSE MODALS WITH ESCAPE KEY FUNCTIONS--->>
/* 
note - takes the event of a key pressed
description - the modal_opened class and checks if the ESC key is pressed then and only then will popup close 
*/
function handleModalCloseEscPressDown(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    closePopup(modalOpened);
  }
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  // clone template element c all its contents and store it in a cardElement variable

  // this will give access for the card title and image so it will store them in variables
  const cardImageElement = cardElement.querySelector("#javascript-card__image");

  const cardTitleElement = cardElement.querySelector("#javascript-card__title");

  // must create a path to the image to link field of the object
  cardImageElement.src = cardData.link;

  // set the image alt text to the name field of the object
  cardImageElement.alt = cardData.name;

  // set the card title to the name field of the object
  cardTitleElement.textContent = cardData.name;

  /* -----------CARD IMAGE CLICKED----------------*/

  // Card Image Preview - EL (Event Listener)

  cardImageElement.addEventListener("click", () => {
    // u will seean image preview on image preview modal

    const imageElement = imagePreviewModal.querySelector(
      "#javascript-card__image"
    );
    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;

    // text view underneath the image view modal
    const titleElement = imagePreviewModal.querySelector(
      "#javascript-image-preview-card-title"
    );
    titleElement.textContent = cardData.name;

    // to open the image preview modal popup
    openPopup(imagePreviewModal);
  }); //end function

  // delete button
  setDeleteHandler(cardElement);

  // like button
  setLikeHandler(cardElement);

  // go back to the ready HTML element c the completed data
  return cardElement;
} // end the function

// helper function
function renderCard(cardData, container) {
  // const cardElement = getCardElement(cardData);
  const card = new Card(cardData, "#javascript-card-template");
  const cardElement = card.getView();
  container.prepend(cardElement);
} // end of function

function setLikeHandler(element) {
  // the like button
  const cardLikeButton = element.querySelector("#javascript-card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
} // end function

function setDeleteHandler(element) {
  const cardDeleteButton = element.querySelector(
    "#javascript-card__trash-image"
  );
  cardDeleteButton.addEventListener("click", () => {
    element.remove();
  });
} // end trash or delete function

/* -----------------EVENT HANDLERS ------------------------------>*/

// CLICKING THE PROFILE EDIT BUTTON -  OPENs THE MODAL
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent; // prefilled form c profile title
  profileDescriptionInput.value = profileDescription.textContent; // prefilled form c the profile description
  openPopup(profileEditModal);
});

profileCloseModal.addEventListener("click", () => closePopup(profileEditModal));

// PROFILE EDIT MODAL BOX IS SAVED WHEN BUTTON IS CLICKED line66
profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
});

// the plus + button for profile Add Card OPENS upon CLICKING
profileAddCardButton.addEventListener("click", () => openPopup(addCardModal));

// the plus + button for profile Add Card modal CLOSES when clicked

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);
  const name = newCardTitleInput.value; //new card TITLE value
  const link = newCardUrlInput.value; //new card URL value

  // calling Render Card Function
  renderCard({ name, link }, cardListElement); // TODO -> issue inside
  event.target.reset();
  closePopup(addCardModal);
  addCardFormValidator.disableSubmitButton();
});

addCardModalCloseButton.addEventListener("click", () =>
  closePopup(addCardModal)
);

/*----------------------CARD PREVIEW MODAL - CLOSING-------------------*/

imageClosePreviewModal.addEventListener("click", () =>
  closePopup(imagePreviewModal)
);

// rendering Card c ForEach() instead of ForLoop()
initialCards.forEach((cardData) => {
  renderCard(cardData, cardListElement);
});
