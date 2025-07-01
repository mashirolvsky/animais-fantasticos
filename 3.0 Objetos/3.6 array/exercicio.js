const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
let firstFood = comidas.shift();
// Remova o último valor de comidas e coloque em uma variável
let lastRemoved = comidas.pop();
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

// Arrume os estudantes em ordem alfabética
let estudantesOrdenados = estudantes.sort();

// Inverta a ordem dos estudantes
let estudantesOrdenadosInvertido = estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
let joanaEstudante = estudantes.includes("Joana");

// Verifique se Juliana faz parte dos estudantes
let julianaEstudante = estudantes.includes("Juliana");

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
let splittedHtml = html.split("section").join("ul").split("div").join("li");

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
let cloneCarros = carros.slice();
carros.pop();

// Console
console.log({
  firstFood: firstFood,
  lastRemoved: lastRemoved,
  comidas: comidas,
  estudantesOrdenados: estudantesOrdenados,
  estudantesOrdenadosInvertido: estudantesOrdenadosInvertido,
  joanaEstudante: joanaEstudante,
  julianaEstudante: julianaEstudante,
  splittedHtml: splittedHtml,
  carros: {
    carrosOriginal: carros,
    carrosClones: cloneCarros,
  },
});
