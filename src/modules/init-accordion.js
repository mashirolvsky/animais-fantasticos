export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "active";
  }
  toggleAccordion(event) {
    event.classList.toggle(this.activeClass);
    event.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach(item => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativa primeiro accordion
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
