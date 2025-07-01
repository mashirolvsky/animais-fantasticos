const listaAnimais = document.querySelector(".animais-lista");

const listaClientHeight = listaAnimais.clientHeight;
const listaOffsetHeight = listaAnimais.offsetHeight;
const listaScrollHeight = listaAnimais.scrollHeight;

console.log({
  clientHeight: listaClientHeight,
  offsetHeight: listaOffsetHeight,
  scrollHeight: listaScrollHeight,
});
