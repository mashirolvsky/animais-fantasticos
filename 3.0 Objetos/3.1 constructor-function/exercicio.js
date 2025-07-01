// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;

  this.andar = function () {
    return `${this.nome} andou...`;
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 27);
console.log(joao.andar());
const maria = new Pessoa("Maria", 34);
console.log(maria.andar());
const bruno = new Pessoa("Bruno", 28);
console.log(bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  this.getElements = function () {
    return document.querySelectorAll(selector);
  };
  this.addClasses = function (classes = []) {
    return this.getElements().forEach(element => {
      const addedClasses = element.classList.add(...classes);
      console.warn(`Alert! Some classes are added: ${classes}`);
      return addedClasses;
    });
  };
  this.removeClasses = function (classes = []) {
    return this.getElements().forEach(element => {
      const removedClasses = element.classList.remove(...classes);
      console.warn(`Alert! Some classes are excluded: ${classes}`);
      return removedClasses;
    });
  };
}

const li = new Dom("li");
li.addClasses(["active", "m-8", "py-2"]);
console.log(li.getElements());
li.removeClasses(["py-2"]);
console.log(li.getElements());
