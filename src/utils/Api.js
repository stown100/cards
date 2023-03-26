class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  //Добавление карточек с сервера
  getInitialCards(page) {
    return fetch(`${this.url}?completed=false&page=${page}&limit=4`, {
      method: "GET",
      headers: this.headers,
    }).then(this._handleResponse);
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  };
}

export const api = new Api({
  url: new URL("https://641de2fd0596099ce156cb4d.mockapi.io/api/cards"),
});
