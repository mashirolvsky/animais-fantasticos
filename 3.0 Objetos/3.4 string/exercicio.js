// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let total = {
  taxa: 0,
  recebimento: 0,
};

transacoes.forEach(value => {
  let { descricao, valor } = value;
  const sanitazedPrice = parseFloat(valor.replace("R$ ", ""));
  if (descricao.toLocaleLowerCase().includes("taxa")) {
    total.taxa += sanitazedPrice;
  } else {
    total.recebimento += sanitazedPrice;
  }
});
console.log(`Valor de taxas à pagar: ${total.taxa}`);
console.log(`Valor total à Receber: ${total.recebimento}`);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
let arrTransportes = transportes.split(";");
console.log(arrTransportes);
// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

let newHTML = html.replaceAll("span", "a");
console.log(newHTML);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
let novaFrase = frase.charAt(--frase.length);
console.log(novaFrase);

// Retorne o total de taxas
const historicoTransacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let totalTaxa = 0;

historicoTransacoes.forEach(value => {
  let sanitizeWord = value.toLocaleLowerCase().trim().includes("taxa");
  if (sanitizeWord) return totalTaxa++;
});
console.log(
  `Total de vezes que a palavra taxa aparece no histórico: ${totalTaxa}`
);
