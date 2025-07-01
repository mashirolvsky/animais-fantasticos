// 1º exemplo
const nome = "André";

function somar(a, b) {
  return a + b;
}

console.log(somar(2, 4)); // Output: 6
console.log(nome); // Output: "André"

// 2º exemplo
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  btn.classList.add("active");
});
