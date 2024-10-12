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
import Api from "../components/Api.js";
import ProfileImageEditPopup from "../components/PopupEditProfileImage.js";
import PopupChangeProfileImage from "../components/PopupChangeProfileImage.js";

/*------------------------------------ELEMENTS---------------------------------*/

const api = new Api({
  url: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "5ac4fe45-2aaf-492d-9eae-17a1ffa794c2",
    "Content-Type": "application/json",
  },
});

let cardList;

const getCardFunction = () => {
  api
    .getCards()
    .then((res) => {
      cardList = new Section({
        items: res,
        renderer: (cardData) => {
          const cardElement = createCard(cardData);
          cardList.addItem(cardElement);
        },
        containerSelector: "#javascript-cards__list",
      });
      cardList.renderItems();
    })
    .catch(console.error);
};

document.addEventListener("DOMContentLoaded", () => {
  getCardFunction();
});

// ------------- USER PROFILE ----------

document.addEventListener("DOMContentLoaded", () => {
  const userInfos = document.querySelector(".content");
  getFunction();
});
const getFunction = () => {
  api
    .getUser()
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        description: userData.about,
      });
      const profileTitle = document.querySelector("#profile-title");
      const profileDescription = document.querySelector("#profile-description");
      const profileImage = document.querySelector(".profile__image");

      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
      profileImage.src = userData.avatar;
    })
    .catch((error) => {
      console.log(error);
    });
};

const addCardPopup = new PopupWithForm({
  popupSelector: "#javascript-add-card-modal",
  handleFormSubmit: ({ title, url }) => {
    const cardData = {
      title,
      url,
    };

    api
      .addCard(cardData)
      .then((newCard) => {
        const cardElement = createCard(newCard);
        cardList.addItem(cardElement);
        formValidators["cardForm"].disableSubmitButton();
        addCardPopup.close();
      })
      .catch((error) => {
        console.error("Error adding card:", error);
      });
  },
});

addCardPopup.setEventListeners();

const addImagePopup = new PopupWithImage({
  popupSelector: "#javascript-image-preview-modal",
});

addImagePopup.setEventListeners();

// --------------  UPDATE USER ----------->>

const userInfo = new Userinfo("#profile-title", "#profile-description");

const profileEditPopup = new PopupWithForm({
  popupSelector: "#javascript-profile-edit-modal",
  handleFormSubmit: (data) => {
    const { title, Description } = data;
    api
      .updateUser({ name: title, about: Description })
      .then((userData) => {
        userInfo.setUserInfo({
          name: userData.name,
          about: userData.about,
        });
        getFunction();
      })
      .catch(console.error);
  },
});

profileEditPopup.setEventListeners();

// ----------------- PROFILE IMAGE ---------------->>
document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".profile__image");
  const profileEditSection = document.querySelector("#profile-edit-section");
  const editIconSvg = `
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 3.45351L6.76981 22.7932L3.33585 19.2903L22.517 0L26 3.45351ZM0 26L5.10189 24.4706L1.52075 21.0171L0 26Z" fill="white"/>
    </svg>
  `;

  let editIconContainer;

  const profileImageEditPopup = new ProfileImageEditPopup({
    popupSelector: "#javascript-profile-image-confirm-modal",
    onConfirm: () => {
      profileEditSection.classList.remove("hidden");
      profileImage.style.opacity = "0.8";

      editIconContainer = document.createElement("div");
      editIconContainer.className = "profile__edit-icon";
      editIconContainer.innerHTML = editIconSvg;

      const imageContainer = profileImage.parentElement;
      imageContainer.appendChild(editIconContainer);

      editIconContainer.addEventListener("click", () => {
        profileImageFormPopup.open();
      });
    },
  });

  const profileImageFormPopup = new PopupChangeProfileImage({
    popupSelector: "#javascript-profile-image-form-modal",
    handleFormSubmit: (formData) => {
      const { avatarUrl } = formData;
      api
        .updateProfilePicture({ avatarUrl })
        .then((userData) => {
          profileImage.src = userData.avatar;
          profileImageFormPopup.close();
          getFunction();

          // Hide the edit icon and reset the image opacity
          if (editIconContainer) {
            editIconContainer.remove();
          }
          profileImage.style.opacity = "1";
        })
        .catch((error) => {
          console.error("Error updating profile picture:", error);
        });
    },
  });

  profileImageEditPopup.setEventListeners();
  profileImageFormPopup.setEventListeners();

  profileImage.addEventListener("click", () => {
    console.log("clicked on image");
    profileImageEditPopup.open();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function openDeleteModal(cardElement) {
    const cardId = cardElement.dataset.id;

    const deleteModal = document.getElementById(
      "javascript-card-delete-confirm-modal"
    );
    deleteModal.classList.add("modal_opened");

    const confirmDeleteButton = document.getElementById(
      "javascript-card-delete-confirm-yes-button"
    );

    confirmDeleteButton.removeEventListener("click", handleConfirmDelete);
    confirmDeleteButton.addEventListener("click", handleConfirmDelete);

    function handleConfirmDelete() {
      api
        .deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch((err) => {
          console.error(`Failed to delete card: ${err}`);
        });
      closeModal(deleteModal);
    }

    const closeDeleteModalButton = document.getElementById(
      "javascript-card-delete-confirm-close-modal"
    );
    closeDeleteModalButton.addEventListener("click", () =>
      closeModal(deleteModal)
    );
  }

  function closeModal(modal) {
    modal.classList.remove("modal_opened");
  }

  document
    .getElementById("javascript-cards__list")
    .addEventListener("click", (event) => {
      if (event.target.classList.contains("card__trash-image")) {
        const cardElement = event.target.closest(".card");
        openDeleteModal(cardElement);
      }
    });
});

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

// declare a delete click handler
// and pass it to card constructor
function handleDeleteClick() {}

// helper function
function createCard(item) {
  const cardElement = new Card(item, "#javascript-card-template", expand);
  return cardElement.getView();
}

/* -----------------EVENT HANDLERS ------------------------------>*/

// CLICKING THE PROFILE EDIT BUTTON -  OPENs THE MODAL
profileEditButton.addEventListener("click", () => {
  const { name, description } = userInfo.getUserInfo();
  profileEditPopup.setInputValues({ title: name, Description: description });

  profileEditPopup.open();
});

// the plus + button for profile Add Card OPENS upon CLICKING .. opening up the add card modal
profileAddCardButton.addEventListener("click", () => addCardPopup.open());
