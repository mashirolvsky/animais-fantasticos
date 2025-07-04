const carro = {
  marca: "Fiat",
  ano: 2018,
  portas: 4,
};

const { ano, portas } = carro;
console.log(ano);
console.log(portas);

const cliente = {
  nome: "Andre",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

const {
  digitais,
  fisicas,
  digitais: { livros, videos },
} = cliente.compras;

console.log(livros, videos[1]);

const pessoa = {
  nome: "Percoval",
  idade: 29,
};

const { nome: percoval } = pessoa;

console.log(percoval);
