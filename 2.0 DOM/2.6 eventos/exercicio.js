// Quando o usuário clicar nos links internos do site,
// adicione a classe active ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const anchor = document.querySelectorAll("a[href^='#']");
function handleAnchorClass(event) {
  let point = event.target;
  event.preventDefault();
  anchor.forEach(activedLink => activedLink.classList.remove("active"));
  point.classList.toggle("active");
}
anchor.forEach(link => {
  link.addEventListener("click", handleAnchorClass);
});
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const html = document.querySelector("*");
html.addEventListener("click", event => console.log(event.target));

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// html.addEventListener("click", event => console.log(event.target.remove()));

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleKeydownText(event) {
  if (event.key === "t") {
    console.log(event.key);
    document.documentElement.classList.toggle("biggerText");
  }
}
html.addEventListener("keydown", handleKeydownText);
