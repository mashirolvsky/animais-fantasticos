// const img = document.querySelector("img");
// const callback = function (event) {
//   console.log(event);
// };

// img.addEventListener("click", callback);

// const animaisLista = document.querySelector(".animais-lista");

// const callbackLista = function (event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
// };

// animaisLista.addEventListener("click", callbackLista);
// console.log(animaisLista);

// const linkExterno = document.querySelector("a[href^='https']");

// function clickNoLink(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

// linkExterno.addEventListener("click", clickNoLink);
// console.log(linkExterno);

// const h1 = document.querySelector("h1");

// handleEvent = event => {
//   console.log(event.type, event);
// };

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);

// window.addEventListener("scroll", handleEvent);
// // window.addEventListener("keydown", handleEvent);

// function handleKeyboard(event) {
//   if (event.key === "a")
//     return console.log(document.body.classList.toggle("azul"));
//   if (event.key === "v")
//     return console.log(document.body.classList.toggle("vermelho"));
// }

// window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

const imgSrc = event => {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
};

imgs.forEach(img => img.addEventListener("click", imgSrc));
