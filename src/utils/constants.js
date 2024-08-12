export const initialCards = [
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

export const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button modal__button",
  inactiveButtonClass: ".modal__save-button modal__button",
  inputErrorClass: ".modal__input_type_error",
  errorClass: ".modal__error",
};

export const profileEditButton = document.querySelector(
  "#profile__edit-button"
);
export const profileEditForm = document.querySelector(
  "#javascript-modal-edit-form"
);
export const profileAddCardButton = document.querySelector(
  "#profile__add-button"
);
export const addCardForm = document.querySelector(
  "#javascript-modal-add-card-form"
);
export const preview__image = document.querySelector(
  "#javascript-preview__image"
);
