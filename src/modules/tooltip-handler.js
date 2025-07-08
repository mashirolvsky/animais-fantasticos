export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `calc(${pageY}px - 5%)`;
    this.tooltipBox.style.left = `calc(${pageX}px + 1%)`;
  };

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  };

  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.insertAdjacentText("afterbegin", text);
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox
  };

  addTooltipsEvents() {
    this.tooltips.forEach(tip => {
      tip.addEventListener("mouseover", this.onMouseOver);
    });
  }
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }
    return this;
  }
}
