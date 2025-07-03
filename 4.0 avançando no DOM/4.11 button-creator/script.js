const controls = document.querySelector("#controls");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controls.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  width(value) {
    this.element.style.paddingLeft = value + "rem";
    this.element.style.paddingRight = value + "rem";
  },
  height(value) {
    this.element.style.paddingBottom = value + "rem";
    this.element.style.paddingTop = value + "rem";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
  cursor(value) {
    this.element.style.cursor = value;
  },
};

function handleChange(event) {
  const eventName = event.target.name;
  const eventValue = event.target.value;
  handleStyle[eventName](eventValue);
  saveButtonSetting(eventName, eventValue);
  showCss();
}

function setButtonValues() {
  const props = Object.keys(localStorage);
  props.forEach(prop => {
    handleStyle[prop](localStorage[prop]);
    controls.elements[prop].value = localStorage[prop];
  });
  showCss();
}
setButtonValues();
function showCss() {
  cssText.innerHTML = `<span>${btn.style.cssText
    .split("; ")
    .join("</span><span>")}`;
}

function saveButtonSetting(name, value) {
  localStorage[name] = value;
}
