import { addCardForm } from "../utils/constants";

export default class Api {
  constructor({ url, headers }) {
    (this.url = url), (this.headers = headers);
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error");
    });
  }

  getUser() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
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
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error");
    });
  }

  cardLikes(cardId, isLiked) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // cardUnlikes(cardId) {
  //   return fetch(`${this.url}/cards/${cardId}/likes`, {
  //     method: "DELETE",
  //     headers: this.headers,
  //   }).then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Error: ${res.status}`);
  //   });
  // }

  updateProfilePicture({ avatarUrl }) {
    console.log(avatarUrl);
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("Error");
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
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("Error");
    });
  }
}
