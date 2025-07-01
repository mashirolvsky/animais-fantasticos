// const pessoa = {
//   register(nome) {
//     this.nome = nome;
//     return this;
//   },
//   andar() {
//     return `${this.nome} andou...`;
//   },
//   comer(comida) {
//     return `${this.nome}, comeu ${comida}, isso parece ser bom...`;
//   },
//   atirou(alvo, local, arma) {
//     return `${this.nome} atirou em ${alvo} bem no ${local} com uma ${arma}...`;
//   },
// };

// let principal = Object.create(pessoa);
// principal.register("Merlifova");

// console.log(principal);
// console.log(principal.andar());
// console.log(principal.atirou("Xavi", "Braço", "Pistola"));
// console.log(principal.comer("Ensopado de Cera de Ouvido"));

// const moto = {};

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get: function () {
//       return this._rodas;
//     },
//     set: function (value) {
//       this._rodas = value * 2;
//     },
//   },
//   placa: {
//     enumerable: true,
//     get: function () {
//       return this._placa;
//     },
//     set: function (value = String) {
//       this._placa = value;
//     },
//   },
// });

// moto.rodas = 2;
// moto.placa = "ABX-0I74";
// const objConfig = Object.values(moto);
// console.log(objConfig);
// let type = value => Object.prototype.toString.call(value);
// console.log(type(objConfig));
// console.log(type(moto));
// console.log(type(moto.placa));
// // const propsConfigDescriptor = Object.getOwnPropertyDescriptors(
// //   window.Animation
// // );
// // console.log(propsConfigDescriptor);
