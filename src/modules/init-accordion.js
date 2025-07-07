export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "active";
  }
  toggleAccordion(event) {
    event.currentTarget.classList.toggle(this.activeClass);
    event.currentTarget.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach(item => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }
  InitFragment() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
