// Adicione a classe active a todos os itens do menu
const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach(item => console.log(item.classList.add("active")));
console.log(menuItems);
// Remove a classe active de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach(item => console.log(item.classList.remove("active")));
console.log(menuItems.item(0).classList.add("active"));
console.log(menuItems);
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");
img.forEach(item => console.log(item.hasAttribute("alt")));
// Modifique o href do link externo no menu
const linkHref = document.querySelector("[href^='https://']");
linkHref.setAttribute("href", "https://www.google.com.br");
console.log(linkHref);
