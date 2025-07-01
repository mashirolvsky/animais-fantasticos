// nomeie 3 propriedades ou métodos de strings
var string = {
  teste1: "string".charAt(1),
  teste2: "string".concat(" ", "bah"),
  teste3: "string".repeat(3),
};
// nomeie 5 propriedades ou métodos de elementos do DOM
var headDOM = document.querySelector("head");
var style = headDOM.computedStyleMap();
var link = document.createElement("link");
var body = document.querySelector("body").appendChild(link);
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var btn = document.querySelector("button[type='button']");
btn.addEventListener("copy", function () {
  return console.log("copiado");
});
// Console
console.log({
  string: string,
  head: {
    type: headDOM,
    styles: style,
  },
  body: body,
  button: btn,
});
