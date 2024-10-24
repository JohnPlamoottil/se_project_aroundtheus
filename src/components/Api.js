export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error");
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  getUser() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  updateUser({ name, about }) {
    console.log("updateUser", name, about);
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      method: "PATCH",
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  cardLikes(cardId, isLiked) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this.headers,
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  // cardUnlikes(cardId) {
  //   return fetch(`${this.url}/cards/${cardId}/likes`, {
  //     method: "DELETE",
  //     headers: this.headers,
  //   }).then(this._checkResponse)
  // .catch((error) => {
  //   console.error(error);
  // });
  // }

  updateProfilePicture({ avatarUrl }) {
    console.log(avatarUrl);
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  addCard(data) {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({
        name: data.title,
        link: data.url,
      }),
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }
}
