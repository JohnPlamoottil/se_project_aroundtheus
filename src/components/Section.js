export default class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element, method = "prepend") {
    //this._container(element);
    this._container[method](element);
    // prepend makes the new cards go before all the other cards
    // append adds it after all the other cards
  }
}
