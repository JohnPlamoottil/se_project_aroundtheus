export default class Userinfo {
  constructor(nameSelector, descriptionSelector, imageSelector) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
    this._imageElement = document.querySelector(imageSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.innerText,
      description: this._descriptionElement.textContent.trim(),
      image: this._imageElement.src,
    };
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._descriptionElement.textContent = data.description;
    this._imageElement.src = data.image;
  }
}
