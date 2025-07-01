export default function initModal() {
  const buttonAnchor = document.querySelector("[data-modal='open']");
  const modalContainer = document.querySelector("[data-modal='container']");
  const modalButtonClose = document.querySelector("[data-modal='close']");

  const toggleModal = event => {
    event.preventDefault();
    return modalContainer.classList.toggle("active");
  };

  const handleClickOutModal = event => {
    if (event.target === this) toggleModal(event);
  };

  buttonAnchor.addEventListener("click", toggleModal);
  modalButtonClose.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", handleClickOutModal);
}
