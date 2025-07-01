// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

console.log(copy);

let clonedMenu = menu.cloneNode(true);

copy.appendChild(clonedMenu);

// Selecione o primeiro DT da dl de Faq
const firstDt = document.querySelector("#faq");

console.log(firstDt.lastElementChild.firstElementChild);

// Selecione o DD referente ao primeiro DT
console.log(firstDt.lastElementChild.firstElementChild.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais-lista");
const faq = document.querySelector("#faq");
const childFaq = document.querySelector("#faq dl");

faq.replaceChild(animais, childFaq);

console.log({
  animais: animais,
  faq: faq,
  childFaq: childFaq,
});
