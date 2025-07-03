// function Button(text, background, color) {
//   this.text = text;
//   this.background = background;
//   this.color = color;
// }

// Button.prototype.insert = function () {
//   const button = document.createElement("button");
//   button.innerText = this.text;
//   button.style.background = this.background;
//   button.style.color = this.color;
//   return document.body.appendChild(button);
// };

// const buttonAcquire = new Button("Add to Cart", "black", "white");
// buttonAcquire.insert();

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element(element, pallete, classes = []) {
    const create = document.createElement(element);
    create.textContent = this.text;
    classes.forEach(cls => create.classList.add(cls));
    create.classList.add(pallete);
    return create;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(
      this.element("button", this.background, [
        "primary",
        "btn",
        "sm",
        "sui",
        "rds-4",
      ])
    );
    return targetElement;
  }
  static buttonBlue(text) {
    const button = new Button(text, "blue");
    return button.appendTo("body");
  }
}

const buttonCart = new Button("+ Add to cart");
buttonCart.appendTo("body");
const buttonRandom = Button.buttonBlue("Adquira já!");
console.log(buttonRandom);

// class Button {
//   constructor(text, variant) {
//     this.text = text;
//     this.variant = variant;
//   }
//   get element() {
//     const type = this._type || "button";
//     const button = document.createElement(type);
//     button.textContent = this.text;
//     button.classList.add(this.variant);
//     return button;
//   }
//   set element(type) {
//     return (this._type = type);
//   }
//   appenTo(target) {
//     const elementTarget = document.querySelector(target);
//     return elementTarget.appendChild(this.element);
//   }
// }

// const button = new Button("Adicionar", "primary");
// button.appenTo("body");
