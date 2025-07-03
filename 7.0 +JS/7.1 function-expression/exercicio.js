// Remova o erro
const priceNumber = n => +n.replace("R$", "").replace(",", ".");
priceNumber("R$ 99,99");
priceNumber2("R$ 99,99");
function priceNumber2(n) {
  +n.replace("R$", "").replace(",", ".");
}

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
var global = "GLOBAL";

(() => {
  var global = "Globinho";
  console.log(global);
  return global;
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
active(() => console.log("hi"));
