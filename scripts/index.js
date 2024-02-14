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

// Elements //

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = document.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

// const modalOpenSelector = "modal_opened"; a shortcut for later
// const profileForm = document.forms["profile-form"]; improvement as needed by reviewer for later
const profileEditForm = profileEditModal.querySelector(".modal__form"); //as directed in Proj4 Stage2 Video by Julian; removing this line of code removes all the cards from the webpage//
const cardListEl = document.querySelector(".cards__list");
console.log("cardListEl", cardListEl);
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Functions //

function closePopup() {
  profileEditModal.classList.remove(
    "modal_opened"
  ); /* used a modificator with only one low dash as reviewer directed */
}
function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  //set the path to the image to the link field of the object
  //set the image field alt text tothe name field of the object
  //set the card title to the name field of the object, too
  cardTitleEl.textContent = cardData.name;
  //return the ready HTML element with the filled-in data
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  // return cardElement;
  return cardElement;
}

// Event Handlers //

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

// Event Listeners //

function handleOpenEditProfile() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
  /* used a modificator with only one low dash */
}

profileEditButton.addEventListener("click", handleOpenEditProfile);

profileEditCloseButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// as shown in Julian Hernandez's Project4 Stage4 3/3 Video
// for (let i = 0; i < initialCards.length; i++) {
//   console.log("hello" + i);
//   const card = initialCards(i);
// }

// initialCards.forEach((cardData) => {
//   const cardElement = getCardElement(cardData);
//   cardListEl.append(cardElement);
// });

initialCards.forEach((cardData) => {
  console.log(cardData.name);

  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
  //append makes the cards go in reverse order
  //prepend makes the cards go chronological order
});

//extra notes below:
// cardTitleEl.textContext = cardData.title;
