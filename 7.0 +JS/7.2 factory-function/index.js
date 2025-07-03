function button(text) {
  function create() {
    const button = document.createElement("button");
    button.textContent = text;
    return button;
  }
  return {
    text,
    create,
  };
}

const btn = button("Compra");
btn.create();
