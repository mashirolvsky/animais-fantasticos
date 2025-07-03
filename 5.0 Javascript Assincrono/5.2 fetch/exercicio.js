// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
// const form = document.querySelector("#form-cep");
// const inputForm = document.querySelector("#cep");
// const btnForm = document.querySelector("#button-cep");
// const span = document.querySelector(".content");
// function handleCepAction(event) {
//   event.preventDefault();
//   const cep = inputForm.value;
//   return buscaCep(cep);
// }
// function buscaCep(cep) {
//   const VIACEP = fetch(`https://viacep.com.br/ws/${cep}/json`);
//   VIACEP.then(r => r.text()).then(body => (span.innerText = body));
// }
// btnForm.addEventListener("click", handleCepAction);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const currency = document.querySelector(".currency");
const buy = document.querySelector(".currencyBuy");
const sell = document.querySelector(".currencySell");

function getValue() {
  const blockInfo = fetch(`https://blockchain.info/ticker`);
  blockInfo
    .then(r => r.json())
    .then(body => {
      buy.innerText = `R$ ${body.BRL.buy}`.replace(".", ",");
      sell.innerText = `R$ ${body.BRL.sell}`.replace(".", ",");
      currency.innerText = body.BRL.symbol;
    });
}
setInterval(getValue, 30000);
getValue();

// Utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em próxima

const jokeButton = document.querySelector(".jokeButton");
const joke = document.querySelector(".joke");

// chucknorris
//   .then(r => r.json())
//   .then(body => {
//     joke.innerText = body.value;
//     console.log(body);
//   });

function handleJoke() {
  const chucknorris = fetch("https://api.chucknorris.io/jokes/random");
  chucknorris
    .then(r => r.json())
    .then(body => {
      joke.innerText = body.value;
    });
}
handleJoke();
jokeButton.addEventListener("click", handleJoke);
