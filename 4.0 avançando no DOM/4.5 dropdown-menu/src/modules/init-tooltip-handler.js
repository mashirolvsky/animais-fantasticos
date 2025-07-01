export default function initTooltip() {}
const tooltips = document.querySelectorAll("[data-tooltip]");
const createTooltipBox = element => {
  const tooltipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  tooltipBox.classList.add("tooltip");
  tooltipBox.insertAdjacentText("afterbegin", text);
  return document.body.appendChild(tooltipBox);
};

function onMouseOver(event) {
  const tooltipBox = createTooltipBox(this);
  tooltipBox.style.top = `calc(${event.pageY}px - 4%)`;
  tooltipBox.style.left = `calc(${event.pageX}px + 1%)`;
  onMouseLeave.tooltip = tooltipBox;
  onMouseMove.tooltip = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener("mouseleave", onMouseLeave);
  this.addEventListener("mousemove", onMouseMove);
}

const onMouseLeave = {
  handleEvent() {
    this.tooltip.remove();
    this.removeEventListener("mouseleave", onMouseLeave);
  },
};

const onMouseMove = {
  handleEvent(event) {
    this.tooltip.style.top = `calc(${event.pageY}px - 4%)`;
    this.tooltip.style.left = `calc(${event.pageX}px + 1%)`;
  },
};

tooltips.forEach(tip => {
  tip.addEventListener("mouseover", onMouseOver);
});
