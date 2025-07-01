// String
var nome = "André";
nome.length;
nome.includes("a");

// Numero
var altura = Math.random() * 10;

// DOM

var btn = document.querySelector("button[type='button']");

var click = function () {
  return console.log(`Botão Clicado!`);
};
btn.classList.add("active");
btn.ariaAtomic;

// Console
console.log(
  {
    nome: {
      nomeReplace: nome.replace("ré", "rei"),
      nomeLocalizaChar: nome.charAt(1),
      nomeIncluso: nome.includes("a"),
      nomeLargura: nome.length,
    },
    altura: {
      alturaDecimal: altura.toFixed(4),
      alturaString: altura.toString(),
    },
    eventListener: {
      eventLength: addEventListener.length,
      buttonClasslist: btn,
    },
  }.eventListener
);
