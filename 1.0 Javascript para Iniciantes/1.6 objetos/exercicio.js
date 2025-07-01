// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  cpf: "301.504.265-89",
  nome: "Lucas",
  sobrenome: "Rocha",
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dados.mostraNome = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  coloracao: "Preto",
  dono: "Lucas",
  idade: 10,
  latir(pessoa) {
    if (pessoa.toLocaleLowerCase() === this.dono.toLocaleLowerCase())
      return "Fala patrão";
  },
};

//  Console

console.log({
  cachorro: cachorro.latir("LUCAS"),
  carro: carro,
  dados: dados,
});
