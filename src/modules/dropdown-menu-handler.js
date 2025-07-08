import initOutsideClick from "./init-outside-click.js";

export default class DropdownMenu {
  constructor(dropdown, userEvent, className) {
    this.dropdown = document.querySelectorAll(dropdown);
    if (userEvent === undefined) this.userEvent = ["touchstart", "click"];
    else this.userEvent = userEvent;

    this.className = className;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  addDropdownMenuEvent() {
    this.dropdown.forEach(menu => {
      this.userEvent.forEach(event => {
        menu.addEventListener(event, this.activeDropdownMenu);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.className);
    initOutsideClick(element, this.userEvent, () => {
      element.classList.remove(this.className);
    });
  }

  init() {
    if (this.dropdown.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
