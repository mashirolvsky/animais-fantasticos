// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
let arrCursos = Array.from(cursos);
const objetoCurso = arrCursos.map(curso => {
  return {
    titulo: curso.children[0].innerText,
    descricao: curso.children[1].innerText,
    aulas: curso.children[2].innerText,
    horas: curso.children[3].innerText,
  };
});

console.log(objetoCurso);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const acimaDeCem = numeros.filter(numero => numero > 100);
console.log(acimaDeCem);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixo = instrumentos.some(
  instrumento => instrumento.toLocaleLowerCase() === "baixo"
);
console.log(baixo);
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
const totalCompras = compras.reduce((acc, compra) => {
  let precoLimpo = +compra.preco.replace("R$ ", "").replace(",", ".");
  return acc + precoLimpo;
}, 0);

console.log(totalCompras);
