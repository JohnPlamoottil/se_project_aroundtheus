import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";

import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Userinfo from "../components/Userinfo.js";
import {
  options,
  initialCards,
  profileEditButton,
  profileEditForm,
  profileAddCardButton,
  addCardForm,
} from "../utils/constants.js";
import { data } from "autoprefixer";

/*------------------------------------ELEMENTS---------------------------------*/

const cardList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardList.addItem(cardElement);
  },
  containerSelector: "#javascript-cards__list",
});
cardList.renderItems();

const addCardPopup = new PopupWithForm({
  popupSelector: "#javascript-add-card-modal",
  handleFormSubmit: ({ title: name, url: link }) => {
    cardList.addItem(createCard({ name, link }));

    formValidators["cardForm"].disableSubmitButton();
  },
});

const userInfo = new Userinfo("#profile-title", "#profile-description");

const profileEditPopup = new PopupWithForm({
  popupSelector: "#javascript-profile-edit-modal",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

addCardPopup.setEventListeners();

profileEditPopup.setEventListeners();

const addImagePopup = new PopupWithImage({
  popupSelector: "#javascript-image-preview-modal",
});

addImagePopup.setEventListeners();

//----PROFILE EDIT MODAL---->>
const profileEditModal = document.querySelector(
  "#javascript-profile-edit-modal"
);

//----PROFILE CLOSE MODAL--->>
const profileCloseModal = profileEditModal.querySelector(
  "#javascript-profile-close-modal"
);

//----PROFILE TITLE---->>

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

//----SELECT CARD TEMPLATE AND ELEMENT--->>
const cardTemplate = document.querySelector("#javascript-card-template").content
  .firstElementChild;

const cardListElement = document.querySelector("#javascript-cards__list");

const addCardModal = document.querySelector("#javascript-add-card-modal");

const newCardTitleInput = addCardForm.querySelector(
  "#javascript-add-card-title-input"
);
const newCardUrlInput = addCardForm.querySelector(
  "#javascript-add-card-description-input"
);

const addCardModalCloseButton = addCardModal.querySelector(
  "#javascript-add-card-close-modal"
);

//---IMAGE PREVIEW MODAL ELEMENTS--->>
const imagePreviewModal = document.querySelector(
  "#javascript-image-preview-modal"
);

const imageClosePreviewModal = document.querySelector(
  "#javascript-image-preview-close-modal"
);

const imageCaption = document.querySelector(
  "#javascript-image-preview-card-title"
);

/* -------------------------------------------------------------------------- */
/*                                   objects                                  */
/* -------------------------------------------------------------------------- */

// define an object for storing validators
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // Here you get the name of the form (if you don’t have it then you need to add it into each form in `index.html` first)
    const formName = formElement.getAttribute("name");

    // Here you store the validator using the `name` of the form
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(options);

/*------------------------------------FUNCTIONS---------------------------------*/

function expand({ name, link }) {
  addImagePopup.open({ name, link });
}

// helper function
function createCard(item) {
  const cardElement = new Card(item, "#javascript-card-template", expand);
  return cardElement.getView();
}

function setLikeHandler(element) {
  // the like button
  const cardLikeButton = element.querySelector("#javascript-card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
}

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
  const { name, description } = userInfo.getUserInfo();
  profileEditPopup.setInputValues({ title: name, Description: description });

  profileEditPopup.open();
});

// the plus + button for profile Add Card OPENS upon CLICKING .. opening up the add card modal
profileAddCardButton.addEventListener("click", () => addCardPopup.open());
