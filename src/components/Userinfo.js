export default class Userinfo {
  constructor(nameSelector, descriptionSelector) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.innerText,
      description: this._descriptionElement.textContent.trim(),
    };
  }

  setUserInfo(data) {
    console.log(data.Description);
    console.log(data);
    this._nameElement.textContent = data.title;
    this._descriptionElement.textContent = data.Description;
  }
}
