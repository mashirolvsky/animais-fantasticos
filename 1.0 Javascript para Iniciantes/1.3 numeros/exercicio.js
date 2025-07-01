// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; // 30
console.log(total);

// Crie duas expressões que retornem NaN
// Primeira expressão
var numero = 94;
var string = "kg";
var totalExp = numero / string;
console.log(totalExp);

// Segunda Expressão
var unidade = "cm";
var altura = 178.5;
var alturaTotal = (altura / 2) * unidade;
console.log(alturaTotal);

// Somar a string '200' com o número 50 e retornar 250
var segundaString = "200";
var segundoNumero = 50;
var total = +segundaString + segundoNumero;
console.log(total);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(incremento++);
console.log(incremento);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = parseInt(peso) / 2; // NaN (Not a Number)
console.log(pesoPorDois);
