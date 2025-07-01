var pessoa = {
  nome: "Lucas",
  idade: 34,
  profissao: "Designer",
  escolaridade: "Faculdade",
};

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  diagonal(lado) {
    return lado * Math.sqrt(2);
  },
};

Math.PI; // Output: 3.14
var random = Math.random(); // Output: Número Aleatório

var pi = Math.PI;
// Criar um objeto
var carro = {};

// Dot notation Get
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

// Dot notation Set
menu.backgroundColor = "#F4A";

var bg = menu.backgroundColor;

// Adding properties and methods
var backgroundColor = 120;

menu.height = 50;
menu.position = "fixed";
menu.display = "flex";
menu.color = function (theme) {
  return (this.backgroundColor = theme);
};

// Console
console.log(
  {
    pessoa: [pessoa.profissao, pessoa["nome"]],
    quadrado: { area: quadrado.area(6), diagonal: quadrado["diagonal"](16) },
    pi: pi,
    random: random,
    carro: carro,
    bg: bg,
    menu: menu,
  }.menu
);
