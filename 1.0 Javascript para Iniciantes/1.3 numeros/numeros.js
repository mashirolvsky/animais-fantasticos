var idade = 23;

console.log(idade);

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
var operacao = {
  soma: soma,
  subtracao: subtracao,
  multiplicacao: multiplicacao,
  divisao: divisao,
  expoente: expoente,
  modulo: modulo,
};

console.log(operacao);

// NaN ou Not a Number

var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log({
  peso: peso,
  pesoPorDois: pesoPorDois,
});

// Ordem de Operação

var total = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 + 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
