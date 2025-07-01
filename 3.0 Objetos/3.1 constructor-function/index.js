// Jeito errado de criar um objeto e instanciá-lo
// const cachorro = { dono: "Lucas", idade: 7 };
// console.log(cachorro);
// const taquara = cachorro;
// taquara.dono = "Andeobaldo";
// taquara.idade = 10;
// console.log(taquara);

// const sarjeta = cachorro;
// sarjeta.dono = "Geonêncio";
// sarjeta.idade = 3;
// console.log(sarjeta);

// console.log(cachorro);

// new Keyword
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

// const zonda = new cachorro();

// 1º Cria um novo objeto
// zonda = {};

// 2º Define o protótipo
// zonda.prototype = cachorro.prototype;

// 3º Aponta a variável this para o objeto
// this = zonda

// 4º Executa a função, substituindo this pelo objeto
// zonda.marca = "Marca";
// zonda.preco = 0;

// 5º Retorna o novo objeto
// return (zonda = {
//   marca: "Marca",
//   preco: 0,
// });

// function Carro(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
// }

// const honda = new Carro("Honda", 30000);
// const fiat = new Carro("Fiat", 15000);

// function Carro(marca, preco) {
//   const taxa = 1.2;
//   const precoFinal = preco * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
// }

// const mazda = new Carro("mazda", 5000);
// const Dom = {
//   seletor: "li",
//   element: function () {
//     return document.querySelector(this.seletor);
//   },
//   active: function () {
//     return this.element().classList.add("active");
//   },
// };

// console.log(Dom.element());

// Dom.seletor = "ul";
// Dom.active();
// console.log(Dom.element());

// function Dom(selector) {
//   this.element = function () {
//     return document.querySelector(selector);
//   };
//   this.active = function (value) {
//     this.element().classList.add(value);
//   };
// }

// const ul = new Dom("ul");

// const firstLi = new Dom("li");
// const lastLi = new Dom("li:last-child");

// lastLi.active("active");
