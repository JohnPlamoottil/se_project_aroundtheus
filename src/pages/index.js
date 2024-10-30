import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";

import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  options,
  profileEditButton,
  profileAddCardButton,
  profileEditAvatarButton,
} from "../utils/constants.js";

import Api from "../components/Api.js";

import CardDeletePopup from "../components/CardDeletePopup.js";

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
          cardList.addItem(cardElement, "append");
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
        image: userData.avatar,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const addCardPopup = new PopupWithForm({
  popupSelector: "#javascript-add-card-modal",
  handleFormSubmit: ({ title, url }) => {
    const cardData = {
      title,
      url,
    };

    addCardPopup.setButtonText(true);

    setTimeout(() => {
      api
        .addCard(cardData)
        .then((newCard) => {
          const cardElement = createCard(newCard);
          cardList.addItem(cardElement);
          formValidators["cardForm"].disableSubmitButton();
          addCardPopup.close();
          addCardPopup.resetForm();
        })
        .catch((error) => {
          console.error("Error adding card:", error);
        })
        .finally(() => {
          // set the button text back
          addCardPopup.setButtonText(false);
        });
    }, 300);
  },
});

addCardPopup.setEventListeners();

const addImagePopup = new PopupWithImage({
  popupSelector: "#javascript-image-preview-modal",
});

addImagePopup.setEventListeners();

const cardTrashPopup = new CardDeletePopup({
  popupSelector: "#javascript-card-delete-confirm-modal",
  onConfirm: () => {},
});

// --------------  UPDATE USER ----------->>

const userInfo = new UserInfo(
  "#profile-title",
  "#profile-description",
  ".profile__image"
);

const profileEditPopup = new PopupWithForm({
  popupSelector: "#javascript-profile-edit-modal",
  handleFormSubmit: (data) => {
    const { title, Description } = data;
    profileEditPopup.setButtonText(true);
    setTimeout(() => {
      api
        .updateUser({ name: title, about: Description })
        .then((userData) => {
          userInfo.setUserInfo({
            name: userData.name,
            description: userData.about,
            image: userData.avatar,
          });

          profileEditPopup.close();
          profileEditPopup.resetForm();
        })
        .catch(console.error)
        .finally(() => {
          profileEditPopup.setButtonText(false);
        });
    }, 500);
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

  const profileImageFormPopup = new PopupWithForm({
    popupSelector: "#javascript-profile-image-form-modal",
    handleFormSubmit: (formData) => {
      const { avatarUrl } = formData;

      setTimeout(() => {
        profileImageFormPopup.setButtonText(true);
        api
          .updateProfilePicture({ avatarUrl })
          .then((userData) => {
            userInfo.setUserInfo({
              name: userData.name,
              description: userData.about,
              image: userData.avatar,
            });

            formValidators["imageForm"].disableSubmitButton();

            profileImageFormPopup.close();
            profileImageFormPopup.resetForm();
          })
          .catch((error) => {
            console.error("Error updating profile picture:", error);
          })
          .finally(() => {
            profileImageFormPopup.setButtonText(false);
          });
      }, 300);
    },
  });

  profileImageFormPopup.setEventListeners();

  profileEditAvatarButton.addEventListener("click", () => {
    console.log("clicked on image");
    profileImageFormPopup.open();
  });
});

//----PROFILE EDIT MODAL---->>
// const profileEditModal = document.querySelector(
//   "#javascript-profile-edit-modal"
// );

//----PROFILE CLOSE MODAL--->>
// const profileCloseModal = profileEditModal.querySelector(
//   "#javascript-profile-close-modal"
// );

//----PROFILE TITLE---->>

//----PROFILE DESCRIPTION------>>
// const profileDescription = document.querySelector(".profile__description");

// //----PROFILE TITLE INPUT------>>
// const profileTitleInput = document.querySelector(
//   "#javascript-profile-title-input"
// );

// //----PROFILE DESCRIPTION INPUT------->>
// const profileDescriptionInput = document.querySelector(
//   "#javascript-profile-description-input"
// );

//----SELECT CARD TEMPLATE AND ELEMENT--->>
// const cardTemplate = document.querySelector("#javascript-card-template").content
//   .firstElementChild;

// const cardListElement = document.querySelector("#javascript-cards__list");

// const addCardModal = document.querySelector("#javascript-add-card-modal");

// const newCardTitleInput = addCardForm.querySelector(
//   "#javascript-add-card-title-input"
// );
// const newCardUrlInput = addCardForm.querySelector(
//   "#javascript-add-card-description-input"
// );

// const addCardModalCloseButton = addCardModal.querySelector(
//   "#javascript-add-card-close-modal"
// );

//---IMAGE PREVIEW MODAL ELEMENTS--->>
// const imagePreviewModal = document.querySelector(
//   "#javascript-image-preview-modal"
// );

// const imageClosePreviewModal = document.querySelector(
//   "#javascript-image-preview-close-modal"
// );

// const imageCaption = document.querySelector(
//   "#javascript-image-preview-card-title"
// );

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

//runs when you click a card's delete button
function handleDeleteClick(card) {
  //open up the delete-confirmation modal
  cardTrashPopup.open();
  cardTrashPopup.setSubmitHandler(() => {
    //runs when we click the yes button on the delete-confirm modal
    //delete card on server
    api
      .deleteCard(card.id)
      .then(() => {
        //delete card on dom
        card.removeCardFromDom();
        //close modal
        cardTrashPopup.close();
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

function handleLikeClick(card) {
  //check if a card is liked or not
  //if not, we will like it on the server and then like it on the dom
  //if it is liked, we unlike it on the server and then unlike it on the dom
  console.log(card);
  console.log(card.isLiked);
  api
    .cardLikes(card.id, card.isLiked)
    .then(() => {
      card.handleLikeIcon();
    })
    .catch((err) => {
      console.log(err);
    });
}

// helper function
function createCard(item) {
  const cardElement = new Card(
    item,
    "#javascript-card-template",
    expand,
    handleDeleteClick,
    handleLikeClick
  );
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
