// // CEP
// const regexpCEP = /\d{5}[-\s]?\d{3}/g;

// const ceps = ["00000-000", "00000 000", "00000000"];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexpCEP));
// }

// // CPF
// const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

// const cpfs = [
//   "000.000.000-00",
//   "000-000-000-00",
//   "000.000.000.00",
//   "000000000-00",
//   "00000000000",
// ];

// for (cpf of cpfs) {
//   console.log(cpf, cpf.match(regexpCPF));
// }

// // \d{2}(?:[-.\s]?\d{3}){2}[-./\s]?\d{4}[-.\s]?\d{2}

// // CNPJ
// const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

// const cnpjs = [
//   "00.000.000/0000-00",
//   "00000000000000",
//   "00-000-000-0000-00",
//   "00.000.000/000000",
//   "00.000.000.000000",
//   "00.000.000.0000.00",
// ];

// for (cnpj of cnpjs) {
//   console.log(cnpj, cnpj.match(regexpCNPJ));
// }

// // Telefone
// const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// // (?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?(?:\d{4,5}[-\s]?)(?:\s?\d{4})

// const telefones = [
//   "+55 11 98888-8888",
//   "+55 11 98888 8888",
//   "+55 11 988888888",
//   "+55 11988888888",
//   "+5511988888888",
//   "5511988888888",
//   "11 98888-8888",
//   "11 98888 8888",
//   "(11) 98888 8888",
//   "(11) 98888-8888",
//   "11-98888-8888",
//   "11 98888 8888",
//   "11988888888",
//   "11988888888",
//   "988888888",
//   "(11)988888888",
//   "98888 8888",
//   "8888 8888",
// ];

// for (telefone of telefones) {
//   console.log(telefone, telefone.match(regexpTELEFONE));
// }

// // Email
// const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

// const emails = [
//   "email@email.com",
//   "email@email.com.org",
//   "email-email@email.com",
//   "email_email@email.com",
//   "email.email23@email.com.br",
//   "email.email23@empresa-sua.com.br",
//   "c@contato.cc",
// ];

// for (email of emails) {
//   console.log(email, email.match(regexpEMAIL));
// }

// // Tag
// const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
// // <\/?[\w\s="']+\/?>
// const tags = [
//   "<div>Isso é uma div</div>",
//   '<div class="ativa">Essa está ativa</div>',
//   '<img src="imagem" />',
//   '<img src="imagem">',
//   '<ul class="ativa">',
//   "<li>Essa está ativa</li>",
//   "</ul>",
// ];

// for (tag of tags) {
//   console.log(tag, tag.match(regexpTAG));
// }

// console.clear();

// const regexp = /\w+/gi;
// const regExp = new RegExp("\\w+", "gi");
// const frase = "Javacsript Linguagem 101";
// console.log(frase.replace(regExp, "x"));

// let i = 0;
// while (regexp.test(frase)) {
//   console.log(i++, regexp.lastIndex);
// }

// const frase = "JavaScript, CoffeeScript, TypeScript, Java, PythonScript";

// const regexp = /Script/g;

// const result = frase.split(regexp);

// console.log(result);

// const tag = `
// <ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>`;

// const regexp = /(?<=<\/?)\w+/g;

// const result = tag.replace(regexp, "@");
// console.log(result);

const dados = document.querySelectorAll(".cpf li");

function elementInnerText([...dados]) {
  return dados.map(element => element.innerText);
}
console.log(elementInnerText(dados));

function limparDados(dado) {
  return dado.replace(/\D/g, "");
}

console.log(limparDados("111.111.111-22"));

function construirCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

console.log(construirCPF("11111111111"));

function formatarCPF(cpf) {
  return cpf.map(limparDados).map(construirCPF);
}

const result = elementInnerText(dados);

console.log(formatarCPF(result));

function substituiCPF(cpfElement) {
  const dado = elementInnerText(cpfElement);
  const cpfFormatado = formatarCPF(dado);
  cpfElement.forEach((element, index) => {
    element.textContent = cpfFormatado[index];
  });
}

substituiCPF(dados);
