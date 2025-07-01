// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll("img");
console.log(todasImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
todasImg.forEach(item => {
  if (item.attributes[0].nodeValue.includes("ba")) {
    return console.log(item);
  }
});
// Selecione todos os links internos (onde o href começa com #)
const todosAnchor = document.querySelectorAll("[href^='#'");
console.log(todosAnchor);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroHDois = document.querySelector(".animais-descricao h2");
console.log(primeiroHDois);
// Selecione o último p do site
const ultimoParagraph = document.querySelectorAll("p");
console.log(ultimoParagraph[ultimoParagraph.length - 1]);
console.log(ultimoParagraph[--ultimoParagraph.length]);
