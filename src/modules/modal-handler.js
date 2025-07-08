export default class Modal {
  constructor(anchor, container, close) {
    this.buttonAnchor = document.querySelector(anchor);
    this.modalContainer = document.querySelector(container);
    this.modalButtonClose = document.querySelector(close);

    // Binding this para a função toggleModal
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.handleClickOutModal = this.handleClickOutModal.bind(this)

  }
  toggleModal() {
    return this.modalContainer.classList.toggle("active");
  };
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal()
  }
  handleClickOutModal(event) {
    if (event.target === this.modalContainer) this.toggleModal(event);
  };

  addModalEvents() {
    this.buttonAnchor.addEventListener("click", this.eventToggleModal);
    this.modalButtonClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.handleClickOutModal);

  }

  init() {
    if (this.buttonAnchor && this.modalContainer && this.modalButtonClose) {
      this.addModalEvents()
    }
    return this;
  }
}
