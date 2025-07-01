// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 65;
var idadeParente = 65;

if (minhaIdade > idadeParente) {
  console.log("É Maior.");
} else if (minhaIdade < idadeParente) {
  console.log("É Menor.");
} else if (minhaIdade == idadeParente) {
  console.log("É Igual.");
} else {
  console.log("Desconheço tal numero.");
}

let oMaior =
  minhaIdade > idadeParente
    ? "É Maior."
    : minhaIdade < idadeParente
    ? "É Menor."
    : "É Igual.";

console.log(oMaior);
// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log("Brasil é maior. 🔰");
} else {
  console.log("China é maior. 🟥");
}
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
  console.log("Gato" || "Cão");
} else {
  console.log("Falso");
}

// Sistema de Login - Crie um sistema de validação de login onde o usuário só pode acessar se tiver idade >= 18 e possuir uma conta ativa. Implemente a lógica usando && para verificar ambas as condições simultaneamente.

const usuarios = {
  lucas: {
    id: 27,
    nome: "Lucas",
    idade: 16,
    account: {
      active: true,
      type: "free",
    },
    cart: {
      cartId: "CARTN-0OPX12458",
      included: 2,
      price: 599.9,
    },
  },
  matheus: {
    id: 29,
    nome: "Matheus",
    idade: 28,
    account: {
      active: true,
      type: "premium",
    },
    cart: {
      cartId: "CARTY-5BDIO3FOPV",
      included: 1,
      price: 199.0,
    },
  },
  povinho: {
    id: 29,
    nome: "Zé Povinho",
    idade: 47,
    account: {
      active: true,
      type: "free",
    },
    cart: {
      cartId: "CARTO-589421FVDAZ",
      included: 2,
      price: 199.0,
    },
  },
};

function validateUser(user) {
  let { nome, idade, account } = user;
  if (idade >= 18 && !!account.active) {
    console.log(
      `Seja bem vindo, ${nome}. Sua idade é ${idade} e sua conta atualmente está no nível: ${account.type}`
    );
  } else {
    console.log(`Você não tem permissão para acessar essa área! 🙄`);
  }
}

validateUser(usuarios.lucas);
validateUser(usuarios.matheus);

// Desconto em e-commerce - Desenvolva um sistema que aplica desconto de 15% se o cliente for premium OU se o valor da compra for superior a R$ 500. Use o operador || para implementar essa regra de negócio

console.log(usuarios);
function applyDiscount(user) {
  let { account } = user;
  let { included, price } = user.cart;
  let totalPrice = included * price;
  let getDiscount = totalPrice - 0.15;
  if (totalPrice >= 500 || account.type === "premium") {
    console.log(
      `Parabéns! Você acaba de ganhar 15% de Desconto. 
      Total a pagar -> ${getDiscount.toFixed(2)}`
    );
  } else {
    console.log(`Total a pagar -> ${totalPrice.toFixed(2)}`);
  }
}

applyDiscount(usuarios.lucas);
applyDiscount(usuarios.matheus);
applyDiscount(usuarios.povinho);
