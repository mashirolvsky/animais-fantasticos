import initOutsideClick from "./init-outside-click.js";

export default class MenuMobile {
  cosntructor(button, list, userEvent, className) {
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);
    this.className = className;

    if (userEvent === undefined) this.userEvent = ["touchstart", "click"];
    else this.userEvent = userEvent;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.list.classList.add(this.className);
    this.button.classList.add(this.className);

    initOutsideClick(this.list, this.userEvent, () => {
      this.list.classList.remove(this.className);
      this.button.classList.remove(this.className);
    });
  }
  addMenuMobileEvents() {
    this.userEvent.forEach(event => {
      this.button.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.list && this.button) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
