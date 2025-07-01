// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa.prototype.completo = function () {
  return `${this.nome} ${this.sobrenome}`;
};
let guilhermo = new Pessoa("Guilhermo", "Cletaficci", 48);
console.log(guilhermo);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);
// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // "Function"
li.innerText; // "String"
li.value; // "Name"
li.hidden; // "Boolean"
li.offsetLeft; // "Number"
li.click(); // Undefined

// Qual o construtor do dado abaixo:
// Boolean - Errado
// String
let liTeste = li.hidden.constructor.name;
