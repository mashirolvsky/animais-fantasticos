// Crie uma função que verifique
// corretamente o tipo de dado
let teste = value => Object.prototype.toString.call(value);
console.log(teste(""));
console.log(teste(n => n));
console.log(teste(0));
console.log(teste(false));
console.log(teste(+"2"));
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
let square = {};

Object.defineProperties(square, {
  lado: {
    value: 4,
    enumerable: false,
    writable: false,
    configurable: false,
  },
});

const retornaSqr = () => square;
console.log(square);
console.log(retornaSqr());
// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.defineProperties(configuracao, {
  width: { writable: false, enumerable: false, configurable: false },
  height: { writable: false, enumerable: false, configurable: false },
  background: { writable: false, enumerable: false, configurable: false },
});
configuracao.width = 10000;
configuracao.background = "#fff";
console.log(configuracao);
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
let arrayProperties = Object.getOwnPropertyNames(Array.prototype);
let stringProperties = Object.getOwnPropertyNames(String.prototype);
console.log(arrayProperties);
console.log(stringProperties);
