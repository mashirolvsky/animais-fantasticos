export default class AnimateScroll {
  constructor(sections, className) {
    this.sections = document.querySelectorAll(sections);
    this.className = className;
    this.halfWindow = Math.floor(window.innerHeight * 0.6);

    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.halfWindow,
      };
    });
  }

  checkDistance() {
    this.distance.forEach(({ element, offset }) => {
      if (window.pageYOffset > offset) {
        element.classList.add(this.className);
      } else if (element.classList.contains(this.className)) {
        element.classList.remove(this.className);
      }
    });
  }

  addWindowEvent() {
    this.checkDistance();
    return window.addEventListener("scroll", this.checkDistance);
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.addWindowEvent();
    }
    return this;
  }
  stop() {
    return window.removeEventListener("scroll", this.checkDistance);
  }
}
