function areaQuadrado(lado) {
  return lado * lado;
}
function areaRetangulo(b, h) {
  let a = b * h;
  return a;
}
function pi() {
  return Math.PI;
}

// Executando areaQuadrado
console.log(areaQuadrado(4)); // Output: 16
console.log(areaQuadrado(5)); // Output: 25
console.log(areaQuadrado(2)); // Output: 4

// Executando areaRetangulo
console.log(areaRetangulo(4, 2)); // Output: 8
console.log(areaRetangulo(5, 5)); // Output: 25
console.log(areaRetangulo(2, 0.25)); // Output: 0.5

// Executando pi
console.log(5 * pi()); //Output: 15.707963267948966

// Parâmetros e Argumentos
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

// Parênteses executa a função
function faveAnime(anime) {
  switch (anime) {
    case "Naruto":
      return "Dattebayo!";
      break;
    case "Dragon Ball":
      return "Ka me ha me ha!";
      break;
    case "Berserk":
      return "Gurifitisu!";
      break;
    default:
      return "Talvez você tenha um bom gosto.";
  }
}

let naoEntendiAPergunta = faveAnime();
console.log(naoEntendiAPergunta);

// Argumentos podem ser Funções
const mostra = function () {
  console.log("hi");
};

addEventListener("click", mostra);

// Pode ou não retornar um valor

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // Retorna o IMC
console.log(imc(80, 1.8)); // Retorna o IMC e undefined

// Escopo

function visitados(paises) {
  var total = 193;
  return `Ainda faltam ${total - paises} países para visitar. 🗺`;
}

console.log(visitados(9));
// console.log(total); // Output: total is not defined

// Hoisting

mci(90, 1.8); // mci aparece no console

function mci(peso, altura) {
  const mci = peso / altura ** 2;
  console.log(mci);
}
