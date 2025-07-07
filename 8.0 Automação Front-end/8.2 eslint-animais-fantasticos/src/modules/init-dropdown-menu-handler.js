import initOutsideClick from "./init-outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll("[data-dropdown]");

  dropdownMenu.forEach(menu => {
    ["touchstart", "click"].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    console.log(event);
    this.classList.add("active");
    initOutsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
