function $$(getElement, getLabel) {
  const element = document.createElement(getElement);
  const label = getLabel;
  function remove() {
    element.remove();
    return this;
  }
  function create() {
    element.textContent = label;
    return this;
  }
  function appendOn(parent) {
    const targetElement = document.querySelector(parent);
    targetElement.appendChild(element);
    return this;
  }
  function on(onEvent, callback) {
    element.addEventListener(onEvent, callback);
    return this;
  }
  function addClass(className) {
    element.classList.add(className);
    return this;
  }
  function removeClass(className) {
    element.classList.remove(className);
    return this;
  }
  function toggleClass(className) {
    element.classList.toggle(className);
    return this;
  }

  return {
    element,
    remove,
    create,
    appendOn,
    on,
    toggleClass,
    addClass,
    removeClass,
  };
}

const setBtn = $$("button", "comprar");
const div = $$("div");

div.create().appendOn("body");
div.addClass("container");

setBtn.create().appendOn("div");

function handleClick(event) {
  console.log(event.target);
}

setBtn.on("click", handleClick);
setBtn.addClass("primary");
