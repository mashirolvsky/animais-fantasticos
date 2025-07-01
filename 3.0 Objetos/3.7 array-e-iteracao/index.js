// // const carros = ["Ford", "Fiat", "Honda"];

// // const carrosMap = carros.map(item => {
// //   const nome = item.toLocaleLowerCase();
// //   const status = nome.startsWith("h") ? "Novo" : "Velho";
// //   return `${item} ${status}`;
// // });

// // console.log(carrosMap, 10e48);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// // const mappedTimeLessons = aulas.map(aula => aula.min);

// // const mappedTitle = lesson => lesson.nome;
// // const mappedTitleLessons = aulas.map(mappedTitle);

// // console.log(mappedTimeLessons, mappedTitleLessons);

// // const aulasMin = [10, 25, 30];
// // const total = aulasMin.reduce((acc, next) => acc + next, 0);

// // const aulasMin2 = [30, 25, 45];

// // const totalReversed = aulasMin2.reduceRight((acc, next) => acc + next, 50);

// // const higherValue = aulasMin2.reduce(
// //   (acc, next) => (acc > next ? acc : next),
// //   50
// // );

// // console.log(total, totalReversed, higherValue);

// const listedLesson = aulas.reduce((acc, next, index) => {
//   acc[index] = next.nome;
//   return acc;
// }, {});

// console.log(listedLesson);

// const frutas = ["Maçã", "Banana", "Pêra", "Uva"];

// const frutasRtl = frutas.reduceRight((acc, next) => acc + " < " + next);
// const frutasLtr = frutas.reduce((acc, next) => acc + " > " + next);

// console.log(frutasLtr + " + " + frutasRtl);

// const existeFruta = frutas.some(fruta => fruta.toLocaleLowerCase() === "uva");
// const todaFruta = frutas.every(fruta => fruta.toLocaleLowerCase() === "banana");
// const encontraFruta = frutas.find(fruta => fruta.length > 2);
// const encontraIndexFruta = frutas.findIndex(
//   fruta => fruta.toLocaleLowerCase() === "banana"
// );

// console.log(existeFruta);
// console.log(todaFruta);
// console.log(encontraFruta);
// console.log(encontraIndexFruta);

// const filteredLessons = aulas.filter(aula => aula.min > 20);

// console.log(filteredLessons);
