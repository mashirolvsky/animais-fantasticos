// Extraia o backgroundColor, color e margin do btn
const element = document.createElement("button");
element.textContent = "button";
document.body.appendChild(element);
const btn = document.querySelector("button");
const { backgroundColor, color, margin } = getComputedStyle(btn);
console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = "php";
let cursoInativo = "D";
[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);
// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

const { cor: bobCor } = cachorro;
console.log(bobCor);
