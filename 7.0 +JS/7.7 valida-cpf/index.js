import ValidaCpf from "./module/valida-cpf.js";

const dado = document.querySelector("#cpf");
const cpf = new ValidaCpf(dado).iniciar();

console.log(cpf);
cpf.adicionarEvento();
