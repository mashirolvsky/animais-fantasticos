// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll("section p");
const totalCaracteres = Array.prototype.reduce.call(
  p,
  (acc, paragraph) => {
    return acc + paragraph.innerText.replaceAll(" ", "").length;
  },
  0
);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Create(tag, classes) {
  this.tag = tag;
  this.classes = classes;
  this.insertTag = function (content) {
    let newTag = document.createElement(tag);
    newTag.classList.add(classes);
    newTag.insertAdjacentText("afterbegin", content);
    return document.body.appendChild(newTag);
  };
}

let headingTeste = new Create("h1", "hi");
headingTeste.insertTag("Hello, World!!");
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
let h1 = new Create("h1", "titulo");
h1.insertTag("Hello, World!!");
const altH1 = new Create("h2", "sub-titulo");
altH1.insertTag("Welcome to my life!");
