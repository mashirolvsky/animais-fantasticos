var nome = "Andrade";
var idade = 28;
var simbolo = Symbol();
console.log(typeof simbolo);

// Strings
var nome = "Andrade";
var sobrenome = "Rocha";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(typeof frase);

var ano = "2018";
var mes = 8;
console.log(ano + mes);

var gol = 1000;
var fraseGol = `Romário fez ${gols * gol} gols`;

console.log(fraseGol);
