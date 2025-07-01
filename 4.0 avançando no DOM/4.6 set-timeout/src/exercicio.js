// let button = document.createElement("button");

// button.insertAdjacentText("afterbegin", "Clique");
// document.body.appendChild(button);
// let btn = document.querySelector("button");

// btn.addEventListener("click", timeouClick);

// function timeouClick() {
//   setTimeout(() => {
//     console.log(this);
//     this.classList.add("active");
//   }, 3000);
// }
// let result = 1;

// function loop(tempo) {
//   console.log(tempo++);
// }
// setInterval(loop, 300, result);

// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function mudaCor() {
//   document.body.classList.toggle("active");
// }

// setInterval(mudaCor, 200);

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");
let i = 0;
let timer;
function iniciarTempo() {
  timer = setInterval(() => {
    i++;
    return (tempo.innerText = i);
  }, 100);
  iniciar.setAttribute("disabled", "");
}
function pausarTempo() {
  iniciar.removeAttribute("disabled");
  return clearInterval(timer);
}
function reiniciarTempo() {
  let resetedIndex = i * 0;
  i = 0;
  return (tempo.innerText = resetedIndex);
}
iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", reiniciarTempo);
