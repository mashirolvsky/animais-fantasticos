// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
// console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9, 3000, 78, 45000, 45001";
let arrNum = numeros.split(", ");

let higher = 0;
arrNum.forEach(num => {
  num = new Number(num);
  if (num > higher) {
    higher = num;
  }
});
const alt = Math.max(...arrNum);
// console.log(`Maior: ${higher}`);
// console.log(`Maior: ${alt}`);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limpaNum(lista = []) {
  let total = 0;
  lista.forEach(num => {
    let sanitazed = new Number(
      num.trim().replace(/[ ]/g, "").replace(",", ".").slice(2)
    );
    let roundedNum = +Math.round(sanitazed).toFixed(2);
    total += roundedNum;
  });
  return total;
}

function altSomaPreco(lista = []) {
  let total = 0;
  lista.forEach(preco => {
    let sanitazed = Math.round(
      +preco.toLocaleUpperCase().replace("R$", "").trim().replace(",", ".")
    );
    total += sanitazed;
  });
  return total;
}

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}
let soma = 0;
listaPrecos.forEach(preco => (soma += limparPreco(preco)));

console.log(soma);
// console.log(altSomaPreco(listaPrecos));
// console.log(limpaNum(listaPrecos));
