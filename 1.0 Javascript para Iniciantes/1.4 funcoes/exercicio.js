console.log({
  validateTruth: validateTruth("0"),
  squareCalculate: squareCalculate(4),
  evenOdd: evenOdd(4),
  argumentType: argumentType("3"),
  precisoVisitar: precisoVisitar(20),
  jaVisitei: jaVisitei(20),
});

// Crie uma função para verificar se um valor é Truthy
function validateTruth(value) {
  return !!value;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function squareCalculate(size) {
  return size * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nameComplete(name, surname) {
  return `${name} ${surname}`;
}
// Crie uma função que verifica se um número é par
function evenOdd(number) {
  let result = number % 2;
  if (result === 0) {
    return `${number} is Even.`;
  } else {
    return `${number} is Odd.`;
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function argumentType(value) {
  return typeof value;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
const scroll = () => {
  const target = window.scrollY;
  if (target === 480) return console.log("limite atingido");
};
addEventListener("scroll", scroll);
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
