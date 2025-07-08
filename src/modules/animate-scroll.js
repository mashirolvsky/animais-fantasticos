export default class AnimateScroll {
  constructor(sections, className) {
    this.sections = document.querySelectorAll(sections);
    this.className = className;
    this.halfWindow = window.innerHeight * 0.6;

    this.animateScroll = this.animateScroll.bind(this);
  }

  verifySection(element) {
    let sectionTop = element.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - this.halfWindow < 0;
    if (isSectionVisible) element.classList.add(this.className);
    else if (element.classList.contains(this.className))
      element.classList.remove(this.className);
  }

  animateScroll() {
    this.sections.forEach(section => {
      this.verifySection(section);
    });
  }

  addWindowEvent() {
    this.animateScroll();
    return window.addEventListener("scroll", this.animateScroll);
  }

  init() {
    if (this.sections.length) {
      this.addWindowEvent();
    }
    return this;
  }
}
